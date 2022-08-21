import "./InputTag.css"
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {NotesStateType} from "../../redux/notes-reducer";

const InputTag = () => {

    // @ts-ignore
    const state = useSelector<AppRootStateType, NotesStateType>(state => state.notes)


    const onTagFilter = () =>{
        console.log(state.tags)
    }

    return (
        <div  className= {state.tags.length !== 0 ? "input_wrapper":""}>
            {state.tags.map((tag)=>{
              return  <div className="tags" onClick={onTagFilter}>
                  {tag}
                </div>
            })}
        </div>
    );
};

export default InputTag;