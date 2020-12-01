import React from "react";
import { BarChart, Bar, XAxis, YAxis } from "recharts";

import "./styles/dashboardBar.css";

class DashboardBar extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      approved: props.approved,
      declined: props.declined,
      pending: props.pending,
    };
  }
  render() {
    const { approved, declined, pending } = this.state;
    const applied = approved + declined + pending;
    const data = [
      { x: 1, y: applied, label: "Applied Leave" },
      { x: 2, y: approved, label: "Approved Leave" },
      { x: 3, y: declined, label: "Declined Leave" },
      { x: 3, y: pending, label: "Pending Leave" },
    ];
    return (
      <div className="chart-div-main">
        <BarChart width={1000} height={300} data={data}>
          <XAxis dataKey="label" stroke="#8884d8" />
          <YAxis />
          <Bar dataKey="y" fill="#8884d8" barSize={30} />
        </BarChart>
      </div>
    );
  }
}

export default DashboardBar;
