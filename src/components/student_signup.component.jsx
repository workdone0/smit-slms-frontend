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
import MenuItem from "@material-ui/core/MenuItem";
import Copyright from "../constants/copyright";

const teacher_guardians = [
  {
    value: "1111",
    label: "Kiran Sriram",
  },
  {
    value: "1112",
    label: "Vikash Sharma",
  },
  {
    value: "1113",
    label: "Rahul Singh",
  },
];

const hostels = [
  {
    value: "1",
    label: "Hostel 1",
  },
  {
    value: "2",
    label: "Hostel 2",
  },
  {
    value: "3",
    label: "Hostel 3",
  },
  {
    value: "4",
    label: "Hostel 4",
  },
];

const years = [
  {
    value: "1",
    label: "1st Year",
  },
  {
    value: "2",
    label: "2nd Year",
  },
  {
    value: "3",
    label: "3rd Year",
  },
  {
    value: "4",
    label: "4th Year",
  },
];

const departments = [
  {
    value: "cse",
    label: "CSE",
  },
  {
    value: "ece",
    label: "ECE",
  },
  {
    value: "civil",
    label: "CIVIL",
  },
  {
    value: "mechanical",
    label: "Mechanical",
  },
  {
    value: "it",
    label: "IT",
  },
];

const levels = [
  {
    value: "0",
    label: "Level 0",
  },
  {
    value: "1",
    label: "Level 1",
  },
  {
    value: "2",
    label: "Level 2",
  },
  {
    value: "3",
    label: "Level 3",
  },
  {
    value: "4",
    label: "Level 4",
  },
  {
    value: "5",
    label: "Level 5",
  },
  {
    value: "6",
    label: "Level 6",
  },
];

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

export default function StudentSignup() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Student Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phone"
                label="Phone Number"
                name="phone"
                autoComplete="phone"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="reg_no"
                label="Registration Number"
                name="reg_no"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="select-floor-warden"
                select
                label="Select Floor Warden"
                fullWidth
                variant="outlined"
                required
              >
                {teacher_guardians.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="select-hostel"
                select
                label="Select Hostel"
                fullWidth
                variant="outlined"
                required
              >
                {hostels.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="block"
                variant="outlined"
                required
                fullWidth
                id="block"
                label="Block"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="room"
                label="Room Number"
                name="room"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="select-level"
                select
                label="Select Level"
                fullWidth
                variant="outlined"
                required
              >
                {levels.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="parents_phone"
                label="Parents Phone"
                id="parents_phone"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="select-dapartment"
                select
                label="Select Department"
                fullWidth
                variant="outlined"
                required
              >
                {departments.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="select-year"
                select
                label="Select Year"
                fullWidth
                variant="outlined"
                required
              >
                {years.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
