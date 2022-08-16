import "./InputTag.css"
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {NotesStateType} from "../../redux/notes-reducer";

const InputTag = () => {

    // @ts-ignore
    const state = useSelector<AppRootStateType, NotesStateType>(state => state.notes)

    let uniqueTags = state.tags
        .flat()
        .filter((elem, pos)=> {return state.tags.flat().indexOf(elem) == pos})
        .filter(el => el !== null)


    const onTagFilter = () =>{
        console.log(state.tags)
    }

    return (
        <div  className= {state.notes.length ? "input_wrapper":""}>
            {uniqueTags.map((tag)=>{
              return  <div className="tags" onClick={onTagFilter}>
                  {tag}
                </div>
            })}
        </div>
    );
};

export default InputTag;