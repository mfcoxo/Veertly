import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const PaginationClass = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <PaginationClass count={10} shape="rounded" />
    </div>
  );
}

export default PaginationClass;

// To do:
// - styling
// - Pagination
// - reusable components