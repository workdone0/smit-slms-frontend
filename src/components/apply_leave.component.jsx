import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Copyright from "../constants/copyright";

import { applyLeaveApi } from "../api/apply_leave";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const ApplyLeave = (props) => {
  const classes = useStyles();
  const [to, setTo] = React.useState([]);
  const [from, setFrom] = React.useState([]);
  const [purpose, setPurpose] = React.useState("");
  const [place, setPlace] = React.useState("");
  const [alt_phone, setAltPhone] = React.useState("");
  console.log(props);
  const applyLeave = async (event) => {
    event.preventDefault();
    const data = {
      to: to,
      from: from,
      purpose: purpose,
      place: place,
      alt_phone: alt_phone,
      id: props.user._id,
    };
    const response = await applyLeaveApi(data);
    console.log(response);
  };
  const validateInput = () => {
    if (
      to.length > 0 &&
      from.length > 0 &&
      purpose !== "" &&
      place !== "" &&
      alt_phone !== ""
    ) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Apply for Leave
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                id="from"
                label="From"
                type="date"
                onChange={(event) => setFrom(event.target.value.split("-"))}
                required
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                id="to"
                label="To"
                type="date"
                onChange={(event) => setTo(event.target.value.split("-"))}
                required
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={(event) => setPurpose(event.target.value)}
                id="purpose"
                label="Purpose of Visit"
                name="purpose"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={(event) => setPlace(event.target.value)}
                name="place"
                label="Place of Visit"
                id="place"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={(event) => setAltPhone(event.target.value)}
                name="alternate_phone"
                label="Alternate Phone Number"
                id="alternate_phone"
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={validateInput()}
            onClick={applyLeave}
          >
            Apply
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default ApplyLeave;
