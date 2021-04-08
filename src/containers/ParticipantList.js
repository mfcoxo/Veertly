import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetParticipantList } from "../redux/actions";
import Loading from "../components/loading/Loading";
import AllParticipants from "../components/ParticipantList/ParticipantList";
import Button from "@material-ui/core/Button";


const ParticipiantList = () => {
  const dispatch = useDispatch();
  const participantList = useSelector((state) => state.ParticipantList);

  const [offset, setOffset] = useState(0);

  console.log("OFFSET", offset);
  const FetchData = (offset) => {
    dispatch(GetParticipantList(offset));
  };

  const handleIncrease = (e) => {
    setOffset(offset + 1);
  };
  const handleDecrease = (e) => {
    setOffset(offset - 1);
  };

  React.useEffect(() => {
    FetchData(offset);
  }, [offset]);

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

  return (
    <div>
      {ShowData()}
      <Button variant="outlined" color="primary" onClick={handleIncrease}>
        Next Page
      </Button>
      <Button variant="outlined" color="primary" onClick={handleDecrease}>
        Previous Page
      </Button>
    </div>
  );
};

export default ParticipiantList;
