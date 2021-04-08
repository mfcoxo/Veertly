import { combineReducers } from "redux";
import ParticipantListReducer from "./ParticipantListReducer";
import ParticipantReducer from "./ParticipantReducer";

const RootReducer = combineReducers({
  ParticipantList: ParticipantListReducer,
  Participant: ParticipantReducer,
});

export default RootReducer;
