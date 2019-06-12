import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Divider } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  },
  divider: {
    height: 2,
    backgroundColor: "#23344e"
  }
}));

function PaperSheet(props) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <Typography variant="h6" component="h3">
          <b>{props.heading}</b>
        </Typography>
        <Divider className={classes.divider} />
        <Typography component="p" variant="body2">
          {props.description}
        </Typography>
      </div>
    </div>
  );
}

export default PaperSheet;
