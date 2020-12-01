import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { withCookies } from "react-cookie";
import { CircularProgress } from "@material-ui/core";
import { connect } from "react-redux";

import Home from "./screens/home";
import StudentSignUp from "./screens/student_signup";
import StudentsDashboard from "./screens/student_dashboard";
import ApplyLeaveStudent from "./screens/apply_leave";

import { tokenVerifyStudent } from "./api/student_token_verify";
import { setCurrentUser } from "./redux/user/user.actions";
import PrivateRoute from "./Private";

class App extends React.Component {
  constructor(props) {
    super(props);
    const cookies = this.props.cookies;
    this.state = {
      student_user_token: cookies.get("student_user_token") || null,
      teacher_user_token: cookies.get("teacher_user_token") || null,
      tokenVerified: false,
      redirectToStudentDashboard: false,
      user: props.currentUser,
    };
  }

  async componentDidMount() {
    if (this.state.student_user_token) {
      const response = await tokenVerifyStudent(this.state.student_user_token);
      if (response.status === 200) {
        this.props.setCurrentUser(response.data.user);
        this.setState({
          redirectToStudentDashboard: true,
          user: response.data.user,
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
          <PrivateRoute
            path="/studentdashboard"
            component={StudentsDashboard}
            user={this.state.user}
          />
          <PrivateRoute
            path="/applyleave"
            component={ApplyLeaveStudent}
            user={this.state.user}
          />
          <Redirect to="/studentdashboard" />
        </Switch>
      );
    }
    if (this.state.tokenVerified) {
      return (
        <React.Fragment>
          <Switch>
            <Route exact path="/">
              <Home cookies={this.props.cookies} />
            </Route>
            <PrivateRoute
              path="/applyleave"
              component={ApplyLeaveStudent}
              user={this.state.user}
            />
            <Route path="/studentsignup">
              <StudentSignUp />
            </Route>

            <PrivateRoute
              path="/studentdashboard"
              component={StudentsDashboard}
              user={this.state.user}
            />
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

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default withCookies(connect(mapStateToProps, mapDispatchToProps)(App));
