import axios from "axios";

export const ParticipantListLoading = () => ({
  type: "PARTICIPANT_LIST_LOADING",
});

export const ParticipantListSuccess = (participants) => ({
  type: "PARTICIPANT_LIST_SUCCESS",
  payload: participants,
});
export const ParticipantListFailure = (error) => ({
  type: "PARTICIPANT_LIST_FAIL",
  payload: error,
});

export const GetParticipantList = (offset) => async (dispatch) => {
  try {
    dispatch(ParticipantListLoading());

    const Url = `https://us-central1-veertly-dev-8b81f.cloudfunctions.net/fetchParticipants?offset=${offset}&limit=100`;

    const result = await axios.get(Url);
    const participants = result.data;
      console.log('1', participants);
    dispatch(ParticipantListSuccess(participants));
    console.log('2', participants);
  } catch (e) {
    dispatch(ParticipantListFailure(e));
  }

};
