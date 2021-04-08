const InitialState = {
  loading: false,
  data: [],
  errorMsg: "",
};

const ParticipantListReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "PARTICIPANT_LIST_LOADING":
      return {
        ...state,
        loading: true,
        data: [],
        errorMsg: "",
      };

    case "PARTICIPANT_LIST_FAIL":
      return {
        ...state,
        loading: false,
        data: [],
        errorMsg: "Unable to get participants",
      };

    case "PARTICIPANT_LIST_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        count: action.payload.length,
        errorMsg: "",
      };
    default:
      return state;
  }
};

export default ParticipantListReducer;
