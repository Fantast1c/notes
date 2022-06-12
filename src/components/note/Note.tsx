import "./Note.css"
import {ChangeEvent, useState} from "react";

const Note = ({title, content, onDelete, id}: any) => {

    let [editMode, setEditMode] = useState(false)
    let [titleData, setTitleData] = useState(title)
    let [contentData, setContentData] = useState(content)

    const activateEditMode = () => {
        setEditMode(true);
    }
    const activateViewMode = () => {
        setEditMode(false);
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
                    <input value={titleData} onChange={changeTitle}/>
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