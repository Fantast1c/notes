import React from 'react';
import "./Note.css"

const Note = ({ title, content, onDelete, id }:any) => {
    return (
        <div className="note">
            <h1>{title}</h1>
            <p>{content}</p>
            <button className="delete_button" onClick={() => onDelete(id)}>
               Delete
            </button>
            <button className="edit_button">
                Edit
            </button>
        </div>
    );
};

export default Note;