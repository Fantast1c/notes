import "./InputTag.css"
import {ChangeEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {NotesStateType, setTagAC} from "../../redux/notes-reducer";

const InputTag = () => {

    // @ts-ignore
    const state = useSelector<AppRootStateType, NotesStateType>(state => state.notes)
    const dispatch = useDispatch()

    const searchByTag = () =>{
        dispatch(setTagAC())
    }

    let uniqueTags = state.tags.flat().filter((elem, pos)=> {
        return state.tags.flat().indexOf(elem) == pos;
    })

    console.log(state.tags.flat().filter((elem, pos)=> {
        return state.tags.flat().indexOf(elem) == pos;
    }))

    return (
        <div className="input_wrapper">
            {uniqueTags.map((t)=>{
              return  <div>
                  {t}
                </div>
            })}
                <button className="button_tag" onClick={searchByTag}>#</button>
        </div>
    );
};

export default InputTag;