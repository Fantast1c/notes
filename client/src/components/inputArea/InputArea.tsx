import {ChangeEvent, useState} from "react";
import "./InputArea.css"

export type noteType = {
    title: string
    content: string
}

const InputArea = ({ onAdd }:any) => {

    const [isExpanded, setExpanded] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    const handleChange = (event:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setNote((preValue) => {
            return {
                ...preValue,
                [name]: value,
            };
        });
    };

    const handleExpanded = () => {
        setExpanded(true);
    };

    const submitButton = (event:any) => {
        onAdd(note);
        setNote({
            title: "",
            content: "",
        });
        event.preventDefault();
    };

    return (
        <div>
            <form>
                {isExpanded && (
                    <input
                        value={note.title}
                        type="text"
                        placeholder="Title"
                        name="title"
                        onChange={handleChange}
                        maxLength={21}
                    />
                )}
                <p>
          <textarea
              value={note.content}
              onClick={handleExpanded}
              name="content"
              placeholder="Take a note..."
              onChange={handleChange}
              rows={isExpanded ? 3 : 1}
          />
                </p>
                <button onClick={submitButton}>+</button>
            </form>
        </div>
    );
}

export default InputArea;