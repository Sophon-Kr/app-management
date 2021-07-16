import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import DragandDrop from "./draganddrop/index";



export class TaskManagement extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="md">
          <Typography
            component="div"
            style={{ backgroundColor: "#cfe8fc", height: "50vh" }}
          />
          {/* ======================================================== */}
          <DragandDrop />
        </Container>
      </React.Fragment>
    );
  }
}

export default TaskManagement;
