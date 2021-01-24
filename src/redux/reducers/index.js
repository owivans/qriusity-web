import { combineReducers} from 'redux';
import registration from './users'

export default combineReducers({
    userReducers: registration,
}); 