/**
 * App Reducers
 */
import { combineReducers } from 'redux';
import settings from './settings';
import chatAppReducer from './ChatAppReducer';
import emailAppReducer from './EmailAppReducer';
import sidebarReducer from './SidebarReducer';
import todoAppReducer from './TodoAppReducer';
import authUserReducer from './AuthUserReducer';
import feedbacksReducer from './FeedbacksReducer';
import ecommerceReducer from './EcommerceReducer';
import driverReducer from "./driverReducer";
import vehicleReducer from "./vehicleReducer";
import adminsReducer from "./adminReducer";

const reducers = combineReducers({
   settings,
   chatAppReducer,
   emailApp: emailAppReducer,
   sidebar: sidebarReducer,
   todoApp: todoAppReducer,
   authUser: authUserReducer,
   feedback: feedbacksReducer,
   ecommerce: ecommerceReducer,
   driver: driverReducer,
   vehicle: vehicleReducer,
   admins: adminsReducer
});

export default reducers;
