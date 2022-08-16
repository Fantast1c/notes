import {ChangeEvent, useState} from "react";
import "./InputArea.css"
import {setTagAC} from "../../redux/notes-reducer";
import {useDispatch} from "react-redux";

export type noteType = {
    title: string
    content: string
}

const InputArea = ({ onAdd }:any) => {

    const dispatch = useDispatch()

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
        if(note.content || note.title)
        onAdd(note.title, note.content);
        setNote({title: "", content: ""})
        dispatch(setTagAC())
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