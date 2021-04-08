const InitialState = {
  loading: false,
  data: {},
  errorMsg: "",
};

const ParticipantReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "PARTICIPANT_LOADING":
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };
    case "PARTICIPANT_FAIL":
      return {
        ...state,
        loading: false,
        errorMsg: "Unable to find participant",
      };
    case "PARTICIPANT_SUCCESS":
      return {
        ...state,
        loading: false,
        errorMsg: "",
        data: {
          ...state.data,
          [action.participantId]: action.payload,
        },
      };
    default:
      return state;
  }
};

export default ParticipantReducer;
