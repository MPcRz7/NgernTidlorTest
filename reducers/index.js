import { combineReducers } from "redux";
import IdReducer from "./IdReducer";
import PhoneReducer from "./PhoneReducer";

const rootReducer = combineReducers({
    idText: IdReducer,
    phoneText: PhoneReducer,
    
})

export default rootReducer;