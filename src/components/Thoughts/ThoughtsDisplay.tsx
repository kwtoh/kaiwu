import React, { Component } from "react";
import { Grid } from "@material-ui/core";

export class ThoughtsDisplay extends Component {
  render() {
    return (
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid container item xs={12} spacing={3}>
          Hi
        </Grid>
        <Grid container item xs={12} spacing={3}>
          Hi
        </Grid>
        <Grid container item xs={12} spacing={3}>
          Hi
        </Grid>
      </Grid>
    );
  }
}

export default ThoughtsDisplay;
