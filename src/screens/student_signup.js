import React from "react";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import StudentSignup from "../components/student_signup.component";
import SmitImage from "../assets/images/smit.jpg";

const styles = (theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: `url(${SmitImage})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
    overflow: "hidden",
    maxHeight: "100vh",
  },
});

class StudentSignUp extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          style={{ maxHeight: "100vh", overflow: "auto" }}
        >
          <StudentSignup />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(StudentSignUp);
