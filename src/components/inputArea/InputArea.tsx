import {ChangeEvent, useState} from "react";
import "./InputArea.css"

const InputArea = () => {

    const [isExpanded, setExpanded] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: "",
    });



    return (
        <div>
            <form>
                {isExpanded && (
                    <input
                        value={note.title}
                        type="text"
                        placeholder="Title"
                        name="title"
                    />
                )}
                <p>
          <textarea
              value={note.content}
              name="content"
              placeholder="Take a note..."

              rows={isExpanded ? 3 : 1}
          ></textarea>
                </p>
                <button >
                </button>
            </form>
        </div>
    );
}

export default InputArea;