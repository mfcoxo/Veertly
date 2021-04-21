import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { makeStyles } from "@material-ui/core/styles";
import { GetParticipantList } from "../redux/actions";
import Loading from "../components/loading/Loading";
import AllParticipants from "../components/ParticipantList/ParticipantList";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  pagination: {
    "& button": {
      margin: theme.spacing(1)
    }
  }
}));

const ParticipiantList = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const participantList = useSelector(state => state.ParticipantList);

  const [offset, setOffset] = useState(0);

  const FetchData = useCallback(
    offset => {
      dispatch(GetParticipantList(offset));
    },
    [dispatch]
  );

  const handleIncrease = e => {
    setOffset(offset + 1);
  };
  const handleDecrease = e => {
    setOffset(offset - 1);
  };

  React.useEffect(() => {
    FetchData(offset);
  }, [FetchData, offset]);

  const ShowData = () => {
    if (participantList.loading) {
      return (
        <div>
          <Loading />
        </div>
      );
    }

    if (!_.isEmpty(participantList.data)) {
      return <AllParticipants participantList={participantList} offset={offset} />;
    }
  };

  return (
    <div>
      {ShowData()}
      <div className={classes.pagination}>
        <Button variant="outlined" color="primary" disabled={offset <= 0} onClick={handleDecrease}>
          Previous Page
        </Button>
        <Button variant="outlined" color="primary" onClick={handleIncrease}>
          Next Page
        </Button>
      </div>
    </div>
  );
};

export default ParticipiantList;
