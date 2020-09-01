import React from "react";
import ThoughtSearch from "./ThoughtSearch";
import ThoughtsDisplay from "./ThoughtsDisplay";

const thoughtsStyle = {
  margin: "5em",
};

export default function Thoughts({ thoughts }) {
  return (
    <>
      <div style={thoughtsStyle}>
        <ThoughtSearch />
      </div>
      <ThoughtsDisplay thoughts={thoughts} />
    </>
  );
}
