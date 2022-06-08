import React from 'react';
import "./Note.css"

const Note = ({ title, content}:any) => {
    return (
        <div className="note">
            <h1>{title}</h1>
            <p>{content}</p>
            <button>

            </button>
        </div>
    );
};

export default Note;