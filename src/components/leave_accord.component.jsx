import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import "./styles/leaveAccord.css";

import { dateString } from "../modules/dateString";

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const LeaveAccord = (props) => {
  return (
    <div>
      <Accordion square>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Grid container>
            <Grid
              item
              xs={12}
              lg={4}
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Typography>{props.leave.purpose}</Typography>
            </Grid>
            <Grid item xs={false} lg={4}></Grid>
            <Grid
              item
              xs={false}
              sm={false}
              lg={4}
              className="status-div"
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography>Status</Typography>
              <br />
              <Typography variant="h6">
                {props.leave.status.toUpperCase()}
              </Typography>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container style={{ padding: "2%" }}>
            <Grid item xs={12} lg={6}>
              <Typography variant="body1">
                From: {dateString(props.leave.from)}
              </Typography>
            </Grid>
            <Grid item xs={12} lg={6} className="to-date">
              <Typography variant="body1">
                To: {dateString(props.leave.to)}
              </Typography>
            </Grid>
            <Grid xs={12} item>
              <Divider style={{ margin: "1%" }} />
              <Typography variant="h6">
                Purpose of Visit: {props.leave.purpose}
              </Typography>
            </Grid>
            <Grid xs={12} item>
              <Divider style={{ margin: "1%" }} />
              <Typography variant="h6">Place: {props.leave.place}</Typography>
            </Grid>
            <Grid xs={12} item>
              <Divider style={{ margin: "1%" }} />
              <Typography variant="h6">
                Alternate Phone No.: {props.leave.alternate_phone}
              </Typography>
            </Grid>
            <Grid xs={12} item>
              <Divider style={{ margin: "1%" }} />
              <Typography variant="h6">Status: {props.leave.status}</Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default LeaveAccord;
