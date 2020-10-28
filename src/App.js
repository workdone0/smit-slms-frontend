import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { withCookies } from "react-cookie";
import { CircularProgress } from "@material-ui/core";

import Home from "./screens/home";
import StudentSignUp from "./screens/student_signup";
import TeacherLogIn from "./screens/teacher_login";
import StudentsDashboard from "./screens/student_dashboard";
import { tokenVerifyStudent } from "./api/student_token_verify";

class App extends React.Component {
  constructor(props) {
    super(props);
    const cookies = this.props.cookies;
    this.state = {
      student_user_token: cookies.get("student_user_token") || null,
      teacher_user_token: cookies.get("teacher_user_token") || null,
      tokenVerified: false,
      redirectToStudentDashboard: false,
    };
  }

  async componentDidMount() {
    if (this.state.student_user_token) {
      const response = await tokenVerifyStudent(this.state.student_user_token);
      if (response.status === 200) {
        this.setState({
          redirectToStudentDashboard: true,
        });
      } else {
        this.setState({
          tokenVerified: true,
        });
      }
    } else {
      this.setState({
        tokenVerified: true,
      });
    }
  }

  render() {
    if (this.state.redirectToStudentDashboard) {
      return (
        <Switch>
          <Route path="/studentdashboard">
            <StudentsDashboard />
          </Route>
          <Redirect to="/studentdashboard" />
        </Switch>
      );
    }
    if (this.state.tokenVerified) {
      console.log("this part called");
      return (
        <React.Fragment>
          <Switch>
            <Route exact path="/">
              <Home cookies={this.props.cookies} />
            </Route>

            <Route path="/studentsignup">
              <StudentSignUp />
            </Route>

            <Route path="/teacherlogin">
              <TeacherLogIn />
            </Route>

            <Route path="/studentdashboard">
              <StudentsDashboard />
            </Route>
          </Switch>
        </React.Fragment>
      );
    } else {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </div>
      );
    }
  }
}

export default withCookies(App);
