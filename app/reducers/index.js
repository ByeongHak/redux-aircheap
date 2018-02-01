import { combineReducers } from 'redux';
import airports from './airports';
import route from './route';
const rootReducer = combineReducers({
  airports,
  route
});
export default rootReducer;