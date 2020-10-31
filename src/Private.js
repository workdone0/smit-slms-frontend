import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class PrivateRoute extends React.Component {
  render() {
    const Component = this.props.component;
    const user = this.props.user;
    const currentUser = this.props.currentUser;
    return user || currentUser ? (
      <Component />
    ) : (
      <Redirect to={{ pathname: "/" }} />
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps)(PrivateRoute);
