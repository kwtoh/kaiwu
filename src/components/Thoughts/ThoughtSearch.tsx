import React, { Component } from "react";
import { TextField } from "@material-ui/core";

export class ThoughtSearch extends Component {
  render() {
    return (
      <div>
        <form className="thought-search" noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Search my thoughts..."
            variant="outlined"
          />
        </form>
      </div>
    );
  }
}

export default ThoughtSearch;
