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

export const GetParticipantList = () => async (dispatch) => {
  try {
    dispatch(ParticipantListLoading());

    const Url =
      "https://us-central1-veertly-dev-8b81f.cloudfunctions.net/fetchParticipants";

    const result = await axios.get(Url);
    const participants = result.data;
    dispatch(ParticipantListSuccess(participants));
  } catch (e) {
    dispatch(ParticipantListFailure(e));
  }
};

export const ParticipantLoading = () => ({
  type: "PARTICIPANT_LOADING",
});

export const ParticipantFailure = (error) => ({
  type: "PARTICIPANT_FAIL",
  payload: error,
});

export const GetParticipant = (participant) => async (dispatch) => {
  try {
    dispatch(ParticipantLoading());

    const Url = `https://us-central1-veertly-dev-8b81f.cloudfunctions.net/fetchParticipants?offset=${idx}&limit=1`;

    const result = await axios.get(Url);

    dispatch({
      type: "PARTICIPANT_SUCCESS",
      payload: result.data,
      participantId: participant,
    });
  } catch (e) {
    dispatch(ParticipantFailure(e));
  }
};
