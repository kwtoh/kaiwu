import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
      float: "left",
    },
  })
);

export default function ThoughtSearch() {
  const classes = useStyles();
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="thought-search"
          label="Search my thoughts..."
          variant="outlined"
        />
      </form>
    </div>
  );
}
