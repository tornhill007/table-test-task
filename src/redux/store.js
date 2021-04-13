import {applyMiddleware, combineReducers, createStore} from "redux";
import tableReducer from "./tableReducer";
import thunkMiddleware from 'redux-thunk';


let reducers = combineReducers({
    tablePage: tableReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
//
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
//     applyMiddleware(thunkMiddleware)
// ));

export default store;