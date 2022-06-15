import "./InputTag.css"
import {ChangeEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {NotesStateType, setTagAC} from "../../redux/notes-reducer";

const InputTag = () => {

    // @ts-ignore
    const state = useSelector<AppRootStateType, NotesStateType>(state => state.notes)
    const dispatch = useDispatch()

    const [tag, setTag] = useState("")

    const handleChangeTag = (event: ChangeEvent<HTMLInputElement>) =>{
        setTag(event.currentTarget.value)
        console.log(event.currentTarget.value)
    }
    const searchByTag = () =>{
        dispatch(setTagAC(tag))
    }

    return (
        <div className="input_wrapper">
                <input className="input_tag" placeholder="Введите тег" onChange={handleChangeTag} />
                <button className="button_tag" onClick={searchByTag}>#</button>
        </div>
    );
};

export default InputTag;