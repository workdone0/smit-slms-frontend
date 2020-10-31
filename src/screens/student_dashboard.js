import React from "react";
import { connect } from "react-redux";
import { setCurrentUser } from "../redux/user/user.actions";
import { withCookies } from "react-cookie";

import StudentDashboard from "../components/student_dashboard";

class StudentsDashboard extends React.Component {
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <StudentDashboard
          setCurrentUser={this.props.setCurrentUser}
          cookies={this.props.cookies}
        />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default withCookies(
  connect(null, mapDispatchToProps)(StudentsDashboard)
);
