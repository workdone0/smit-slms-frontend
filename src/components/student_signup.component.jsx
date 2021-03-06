import React, { useEffect, useState } from "react";
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
import { CircularProgress } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckIcon from "@material-ui/icons/Check";
import { green } from "@material-ui/core/colors";

import { validateEmail } from "../modules/validateEmail";
import { teacherGuardianList } from "../api/teacher_guardian_list";
import { studentSignUp } from "../api/student_signup";
import {
  hostels,
  years,
  departments,
  levels,
} from "../modules/student_signup_select_options";

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
  loadingDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  successDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    textAlign: "center",
  },
  successIcon: {
    color: green[500],
    fontSize: 80,
  },
}));

export default function StudentSignup() {
  const classes = useStyles();
  const notify = (message) => toast(message);
  const [signUpSuccessful, setSignupSuccessful] = useState(false);
  const [loading, setLoading] = useState(true);
  const [teacher_guardians, setTg] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [reg_no, setReg] = useState("");
  const [floorWarden, setFloorWarden] = useState("");
  const [hostel, setHostel] = useState("");
  const [block, setBlock] = useState("");
  const [room, setRoom] = useState("");
  const [level, setLevel] = useState("");
  const [parentPhone, setParentPhone] = useState("");
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const [password, setPassword] = useState("");

  const validateForm = () => {
    if (
      name !== "" &&
      email !== "" &&
      phone !== "" &&
      reg_no !== "" &&
      floorWarden !== "" &&
      hostel !== "" &&
      block !== "" &&
      room !== "" &&
      level !== "" &&
      parentPhone !== "" &&
      department !== "" &&
      year !== "" &&
      password !== ""
    ) {
      if (validateEmail(email) && password.length >= 10) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const user = {
      name: name,
      phone: phone,
      email: email,
      reg_no: reg_no,
      password: password,
      floor_warden_id: floorWarden,
      hostel: hostel,
      block: block.toUpperCase(),
      room: room,
      level: level,
      parents_phone: parentPhone,
      department: department.toUpperCase(),
      year: year,
    };
    try {
      const response = await studentSignUp(user);
      if (response.status === 201) {
        setLoading(false);
        setSignupSuccessful(true);
      } else {
        setLoading(false);
        notify(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getFwList = async () => {
      const data = await teacherGuardianList();
      setTg(data.data);
      setLoading(false);
    };
    getFwList();
    // setTg(data);
  }, []);
  if (loading) {
    return (
      <div className={classes.loadingDiv}>
        <CircularProgress />
      </div>
    );
  } else {
    if (signUpSuccessful) {
      return (
        <Grid container alignItems="center" justify="center">
          <div className={classes.successDiv}>
            <Grid item xs={12}>
              <CheckIcon className={classes.successIcon} />
              <br />
              <Typography variant="h4">
                Signup successful, login to continue
              </Typography>
            </Grid>
          </div>
        </Grid>
      );
    } else {
      return (
        <>
          <ToastContainer />
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
                      value={name}
                      onChange={(event) => setName(event.target.value)}
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
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
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
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
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
                      value={reg_no}
                      onChange={(event) => setReg(event.target.value)}
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
                      value={floorWarden}
                      onChange={(event) => setFloorWarden(event.target.value)}
                    >
                      {teacher_guardians.map((option) => (
                        <MenuItem key={option._id} value={option._id}>
                          {option.name}
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
                      value={hostel}
                      onChange={(event) => setHostel(event.target.value)}
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
                      value={block}
                      onChange={(event) => setBlock(event.target.value)}
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
                      value={room}
                      onChange={(event) => setRoom(event.target.value)}
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
                      value={level}
                      onChange={(event) => setLevel(event.target.value)}
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
                      value={parentPhone}
                      onChange={(event) => setParentPhone(event.target.value)}
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
                      value={department}
                      onChange={(event) => setDepartment(event.target.value)}
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
                      value={year}
                      onChange={(event) => setYear(event.target.value)}
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
                      helperText="Must be 10 digits long"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={handleSubmit}
                  disabled={!validateForm()}
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
        </>
      );
    }
  }
}
