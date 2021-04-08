import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetParticipantList } from "./redux/actions";
import ParticipantDetails from "./ParticipantDetails";
import Loading from "./components/loading/Loading";
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
          <Loading/>
        </div>
      );
    }

    if (!_.isEmpty(participantList.data)) {
      return (
        <div>
          <h1>
          </h1>
          {participantList.data.map((participant) => (
            <div>
              <p key={participant.id}>
                {participant.firstName} {participant.lastName}
              </p>
              <ParticipantDetails
              firstName={participant.firstName} 
              lastName={participant.lastName} 
              email={participant.email}
              jobTitle={participant.jobTitle}
              company={participant.company}
               />
            </div>
          ))}
          {/* <PaginationClass/> */}
        </div>
      );
    }
  };

  return (
    <div>
      {ShowData()}
    </div>
  );
};

export default ParticipiantList;
