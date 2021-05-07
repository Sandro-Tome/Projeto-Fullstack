import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";

const useStyles = makeStyles({
  root: {
    margin: 10,
    maxWidth: 345,
    borderRadius: 0,
  },
  media: {
    height: 240,
  },
});

const ImageCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} onClick={props.onClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.subtitle}
          className={classes.media}
          image={props.image}
          subtitle={props.subtitle}
        />
      </CardActionArea>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ImageCard;
