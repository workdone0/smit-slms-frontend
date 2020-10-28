import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./screens/home";
import StudentSignUp from "./screens/student_signup";
import TeacherLogIn from "./screens/teacher_login";
import StudentsDashboard from "./screens/student_dashboard";

export let Routes = (
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
