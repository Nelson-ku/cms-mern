import { legacy_createStore} from "redux";
import customerReducers from  './reducers';

const store = legacy_createStore(customerReducers);

export default store;

