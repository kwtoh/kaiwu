import React from "react";
import { Grid } from "@material-ui/core";
import ThoughtCard from "./ThoughtCard";

const displayStyle = {
  overflowY: "scroll" as "scroll", // this is to ignore the typescript.
  flexGrow: 1,
  margin: "5em",
  height: "100vh",
};

export default function ThoughtsDisplay({ thoughts }) {
  const thoughtsCards = thoughts.map(({ link, image, title, subtitle }) => (
    <ThoughtCard link={link} image={image} title={title} subtitle={subtitle} />
  ));
  return (
    <div style={displayStyle}>
      <Grid container spacing={3}>
        <Grid container item xs={12} spacing={3}>
          {thoughtsCards}
        </Grid>
      </Grid>
    </div>
  );
}
