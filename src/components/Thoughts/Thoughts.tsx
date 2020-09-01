import React, { Component } from "react";
import ThoughtSearch from "./ThoughtSearch";
import ThoughtsDisplay from "./ThoughtsDisplay";

export class Thoughts extends Component {
  render() {
    return (
      <>
        <h1>Thoughts</h1>
        <p>
          A place where I pen down some of the thoughts that goes through my
          mind.
        </p>
        <ThoughtSearch />
        <ThoughtsDisplay />
      </>
    );
  }
}

export default Thoughts;
