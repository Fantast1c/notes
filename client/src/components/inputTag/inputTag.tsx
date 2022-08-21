import "./InputTag.css"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {NotesStateType, setFilterOnTagAC} from "../../redux/notes-reducer";

const InputTag = () => {

    // @ts-ignore
    const state = useSelector<AppRootStateType, NotesStateType>(state => state.notes)
    const dispatch = useDispatch()

    const onTagFilter = (index:number) =>{
        console.log(index)
        dispatch(setFilterOnTagAC(index))

    }

    return (
        <div  className= {state.tags.length !== 0 ? "input_wrapper":""}>
            {state.tags.map((tag, index)=>{
              return  <div className="tags" onClick={()=> onTagFilter(index)}>
                  {tag}
                </div>
            })}
        </div>
    );
};

export default InputTag;