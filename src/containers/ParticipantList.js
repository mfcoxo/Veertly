import React from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetParticipantList } from "../redux/actions";
// import ParticipantDetails from "./components/ParticipantList/ParticipantDetails";
import Loading from "../components/loading/Loading";
import AllParticipants from "../components/ParticipantList/ParticipantList";

// import PaginationClass from "./pagination";

const ParticipiantList = () => {
  const dispatch = useDispatch();
  const participantList = useSelector((state) => state.ParticipantList);



  const FetchData = () => {
    dispatch(GetParticipantList());
  };

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
