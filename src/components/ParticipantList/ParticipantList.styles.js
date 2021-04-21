import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  gridWrapper: {
    margin: theme.spacing(3)
  },
  root: {
    flexGrow: 1,
    height: 150
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  chip: {
    marginBottom: theme.spacing(1)
  }
}));

export default useStyles;
