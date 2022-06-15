import {applyMiddleware, combineReducers, createStore} from "redux";
import {notesReducer} from "./notes-reducer";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    notes:notesReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>