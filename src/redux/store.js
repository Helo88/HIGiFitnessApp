import { createStore } from "redux";
import reminderReducer from "./reducers/index";

const store = createStore(reminderReducer);

export default store;
