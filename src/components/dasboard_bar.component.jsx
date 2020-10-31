import React from "react";
import { BarChart, Bar, XAxis, YAxis } from "recharts";

import "./styles/dashboardBar.css";

class DashboardBar extends React.Component {
  render() {
    const data = [
      { x: 1, y: 6, label: "Applied Leave" },
      { x: 2, y: 2, label: "Approved Leave" },
      { x: 3, y: 4, label: "Declined Leave" },
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
