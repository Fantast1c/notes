import React from 'react';
import "./Count.css"
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {NotesStateType} from "../../redux/notes-reducer";

const Count = () => {

    // @ts-ignore
    const state = useSelector<AppRootStateType, NotesStateType>(state => state.notes)

    return (
        <div className="count">
            <h4>
                {state.notes.length === 0 ? "Empty" : `Showing ${state.notes.length} Notes in Database`}
            </h4>
        </div>
    );
};

export default Count;