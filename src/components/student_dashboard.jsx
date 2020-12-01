import React, { useEffect } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import { CircularProgress } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { connect } from "react-redux";

import DashboardBar from "./dasboard_bar.component";
import LeaveAccord from "./leave_accord.component";
import { studentLeave } from "../api/student_leave.js";
const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  loadingDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
}));

const StudentDashboard = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [leaves, setLeaves] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [approvedCount, setApprovedCount] = React.useState(0);
  const [declinedCount, setDeclinedCount] = React.useState(0);
  const [pendingCount, setPendingCount] = React.useState(0);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    props.setCurrentUser(null);
    props.cookies.remove("student_user_token", { sameSite: "strict" });
  };

  useEffect(() => {
    const getLeaveList = async () => {
      const data = await studentLeave(props.currentUser._id);
      if (data.status === 200) {
        setLeaves(data.data.leaves);
        var pending = 0;
        var declined = 0;
        var approved = 0;
        data.data.leaves.map((leave) => {
          if (leave.status.toUpperCase() === "PENDING") {
            pending = pending + 1;
          } else if (leave.status.toUpperCase() === "DECLINED") {
            declined = declined + 1;
          } else {
            approved = approved + 1;
          }
          return null;
        });
        setPendingCount(pending);
        setApprovedCount(approved);
        setDeclinedCount(declined);
        setLoading(false);
      } else {
        setLoading(false);
      }
    };
    getLeaveList();
    // eslint-disable-next-line
  }, []);

  if (loading === true) {
    return (
      <div className={classes.loadingDiv}>
        <CircularProgress />
      </div>
    );
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button key="Home">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </List>
        <List>
          <ListItem button key="Apply Leave">
            <ListItemIcon>
              <a href="/applyleave">
                <DriveEtaIcon />
              </a>
            </ListItemIcon>
            <ListItemText primary="Apply Leave" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button key="Profile">
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
        </List>
        <List>
          <ListItem button key="Logout">
            <ListItemIcon>
              <ExitToAppIcon onClick={handleLogout} />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container spacing={3}>
          <Grid item xs={false} sm={false} lg={12}>
            <DashboardBar
              approved={approvedCount}
              declined={declinedCount}
              pending={pendingCount}
            />
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">PAST LEAVES</Typography>
            <br />
            <Divider />
          </Grid>
          <Grid item xs={12}>
            {leaves.length === 0 ? (
              <Typography variant="h6">No Leaves to display</Typography>
            ) : (
              leaves.map((leave) => (
                <LeaveAccord key={leave._id} leave={leave} />
              ))
            )}
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps)(StudentDashboard);
