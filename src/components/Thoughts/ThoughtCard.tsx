import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const cardStyle = {
  maxWidth: 345,
  margin: "1em",
};

export default function ThoughtCard({ link, image, title, subtitle }) {
  return (
    <Link href={link}>
      <Card style={cardStyle}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={title}
            height="140"
            image={image}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {subtitle}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
