import "./Note.css"
import {ChangeEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {editNoteAC, setTagAC} from "../../redux/notes-reducer";

const Note = ({title, content, onDelete, id}: any) => {

    const dispatch = useDispatch()

    let [titleData, setTitleData] = useState(title)
    let [contentData, setContentData] = useState(content)
    let [editMode, setEditMode] = useState(false)

    const activateEditMode = () => {
       setEditMode(true)
    }
    const activateViewMode = () => {
      setEditMode(false)
        dispatch(editNoteAC(title, content, id))
        dispatch(setTagAC())
    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitleData(e.currentTarget.value)
    }
    const changeContent = (e: ChangeEvent<HTMLInputElement>) => {
        setContentData(e.currentTarget.value)
    }

    return (
        <div className="note">
            <button className="delete_button" onClick={() => onDelete(id)}>
                X
            </button>
            {editMode ?
                <>
                    <input value={titleData} onChange={changeTitle} maxLength={21}/>
                    <input value={contentData} onChange={changeContent}/>
                    <button className="save_button" onClick={activateViewMode}>✓</button>
                </>
                :
                <>
                    <h1>{titleData}</h1>
                    <p>{contentData}</p>
                    <button className="edit_button" onClick={() => activateEditMode()}>
                        Edit
                    </button>
                </>
            }
        </div>
    );
};

export default Note;