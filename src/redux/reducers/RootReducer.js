import { combineReducers } from "redux";
import ParticipantListReducer from "./ParticipantListReducer";

const RootReducer = combineReducers({
  ParticipantList: ParticipantListReducer,
});

export default RootReducer;
