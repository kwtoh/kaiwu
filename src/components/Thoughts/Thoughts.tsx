import React, { Component } from "react";
import ThoughtSearch from "./ThoughtSearch";
import ThoughtsDisplay from "./ThoughtsDisplay";

const thoughtsStyle = {
  margin: "5em",
};

export class Thoughts extends Component {
  render() {
    return (
      <>
        <div style={thoughtsStyle}>
          <span>
            <ThoughtSearch />
          </span>
          <span>
            A place where I pen down some of the thoughts that goes through my
            mind.
          </span>
        </div>
        <ThoughtsDisplay />
      </>
    );
  }
}

export default Thoughts;
