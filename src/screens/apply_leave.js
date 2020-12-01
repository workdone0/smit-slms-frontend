import React from "react";
import ApplyLeave from "../components/apply_leave.component";
import { connect } from "react-redux";
class ApplyLeaveStudent extends React.Component {
  render() {
    return <ApplyLeave user={this.props.currentUser} />;
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps)(ApplyLeaveStudent);
