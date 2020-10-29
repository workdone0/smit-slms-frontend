import React from "react";
import { connect } from "react-redux";

import { setCurrentUser } from "../redux/user/user.actions";
import StudentLogin from "../components/student_login.component";

class Home extends React.Component {
  setUser = (user) => {
    this.props.setCurrentUser(user);
  };

  render() {
    return (
      <React.Fragment>
        <StudentLogin setUser={this.setUser} />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(Home);
