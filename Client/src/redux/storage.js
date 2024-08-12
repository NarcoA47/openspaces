import {createStore, combineReducers, createStore, applyMiddleware} from 'redux'
import thunk from 'thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducer from './rootReducer'

const finalReducer = combineReducers({
    rootReducer,
});

const initialState = {
    rootReducer: {
        listeditems: localStorage.getItem("listeditems") ? JSON.parse(localStorage.getItem("listeditems")) : [],
    },
}

const middleware = [thunk,];

const Listed = createStore(finalReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default Listed;