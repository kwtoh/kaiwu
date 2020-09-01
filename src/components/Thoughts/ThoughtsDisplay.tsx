import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import ThoughtCard from "./ThoughtCard";
import funan3 from "../../images/funan_3.jpg";

const displayStyle = {
  overflowY: "scroll" as "scroll", // this is to ignore the typescript.
  flexGrow: 1,
  margin: "5em",
  height: "100vh",
};

const thoughts = [
  {
    id: 1,
    link: "/reference",
    image: funan3,
    title: "funan centre",
    subtitle: "funan centre the new place",
  },
  {
    id: 2,
    link: "/reference",
    image: funan3,
    title: "funan centre",
    subtitle: "funan centre the new place",
  },
  {
    id: 3,
    link: "/reference",
    image: funan3,
    title: "funan centre",
    subtitle: "funan centre the new place",
  },
  {
    id: 4,
    link: "/reference",
    image: funan3,
    title: "funan centre",
    subtitle: "funan centre the new place",
  },
  {
    id: 5,
    link: "/reference",
    image: funan3,
    title: "funan centre",
    subtitle: "funan centre the new place",
  },
  {
    id: 6,
    link: "/reference",
    image: funan3,
    title: "funan centre",
    subtitle: "funan centre the new place",
  },
  {
    id: 1,
    link: "/reference",
    image: funan3,
    title: "funan centre",
    subtitle: "funan centre the new place",
  },
  {
    id: 2,
    link: "/reference",
    image: funan3,
    title: "funan centre",
    subtitle: "funan centre the new place",
  },
  {
    id: 3,
    link: "/reference",
    image: funan3,
    title: "funan centre",
    subtitle: "funan centre the new place",
  },
  {
    id: 4,
    link: "/reference",
    image: funan3,
    title: "funan centre",
    subtitle: "funan centre the new place",
  },
  {
    id: 5,
    link: "/reference",
    image: funan3,
    title: "funan centre",
    subtitle: "funan centre the new place",
  },
  {
    id: 6,
    link: "/reference",
    image: funan3,
    title: "funan centre",
    subtitle: "funan centre the new place",
  },
  {
    id: 1,
    link: "/reference",
    image: funan3,
    title: "funan centre",
    subtitle: "funan centre the new place",
  },
  {
    id: 2,
    link: "/reference",
    image: funan3,
    title: "funan centre",
    subtitle: "funan centre the new place",
  },
  {
    id: 3,
    link: "/reference",
    image: funan3,
    title: "funan centre",
    subtitle: "funan centre the new place",
  },
  {
    id: 4,
    link: "/reference",
    image: funan3,
    title: "funan centre",
    subtitle: "funan centre the new place",
  },
  {
    id: 5,
    link: "/reference",
    image: funan3,
    title: "funan centre",
    subtitle: "funan centre the new place",
  },
  {
    id: 6,
    link: "/reference",
    image: funan3,
    title: "funan centre",
    subtitle: "funan centre the new place",
  },
  {
    id: 1,
    link: "/reference",
    image: funan3,
    title: "funan centre",
    subtitle: "funan centre the new place",
  },
  {
    id: 2,
    link: "/reference",
    image: funan3,
    title: "funan centre",
    subtitle: "funan centre the new place",
  },
  {
    id: 3,
    link: "/reference",
    image: funan3,
    title: "funan centre",
    subtitle: "funan centre the new place",
  },
  {
    id: 4,
    link: "/reference",
    image: funan3,
    title: "funan centre",
    subtitle: "funan centre the new place",
  },
  {
    id: 5,
    link: "/reference",
    image: funan3,
    title: "funan centre",
    subtitle: "funan centre the new place",
  },
  {
    id: 6,
    link: "/reference",
    image: funan3,
    title: "funan centre",
    subtitle: "funan centre the new place",
  },
];

export class ThoughtsDisplay extends Component {
  render() {
    const thoughtsCards = thoughts.map(({ link, image, title, subtitle }) => (
      <ThoughtCard
        link={link}
        image={image}
        title={title}
        subtitle={subtitle}
      />
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
}

export default ThoughtsDisplay;
