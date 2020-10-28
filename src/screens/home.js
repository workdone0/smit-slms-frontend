import React from "react";

import StudentLogin from "../components/student_login.component";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <StudentLogin />
      </React.Fragment>
    );
  }
}

export default Home;
