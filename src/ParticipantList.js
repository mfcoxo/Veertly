import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetParticipantList } from "./redux/actions";
import ParticipantDetails from "./ParticipantDetails";
import Loading from "./components/loading/Loading";
import Chip from "./components/Chip/Chip";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AllParticipants from "./components/ParticipantList/ParticipantList";

// import PaginationClass from "./pagination";

const ParticipiantList = () => {
  const dispatch = useDispatch();
  const participantList = useSelector((state) => state.ParticipantList);

  console.log("test", participantList);

  const FetchData = () => {
    dispatch(GetParticipantList());
  };

  console.log("job:", participantList.data);
  React.useEffect(() => {
    FetchData();
  }, []);

  const ShowData = () => {
    if (participantList.loading) {
      return (
        <div>
          <Loading />
        </div>
      );
    }

    if (!_.isEmpty(participantList.data)) {
      return <AllParticipants participantList={participantList} />;
    }
  };

  return <div>{ShowData()}</div>;
};

export default ParticipiantList;
