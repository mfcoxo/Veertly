import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetParticipantList } from "./redux/actions";

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
          <h1> Loading...</h1>
        </div>
      );
    }

    if (!_.isEmpty(participantList.data)) {
      return (
        <div>
          <h1>
            Showing
            {participantList.data.length} participants on this page
          </h1>
          {participantList.data.map((participant) => (
            <p key={participant.id}>
              {participant.firstName} {participant.lastName}
            </p>
          ))}
          <p> </p>
        </div>
      );
    }
  };

  return (
    <div>
      <h1> This is a list of participants</h1>
      {ShowData()}
    </div>
  );
};

export default ParticipiantList;
