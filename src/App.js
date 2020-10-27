import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./screens/home";
import StudentSignUp from "./screens/student_signup";
import TeacherLogIn from "./screens/teacher_login";
import StudentsDashboard from "./screens/student_dashboard";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/">
          <Home />
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
    );
  }
}

export default App;
