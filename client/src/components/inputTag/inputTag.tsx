import "./InputTag.css"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {NotesStateType, filterByTagTC, getNoteTC} from "../../redux/notes-reducer";

const InputTag = () => {

    // @ts-ignore
    const state = useSelector<AppRootStateType, NotesStateType>(state => state.notes)
    const dispatch = useDispatch()

    const onTagFilter = (index:number) =>{
        //@ts-ignore
        dispatch(filterByTagTC(index))
    }

    const onTagAll = () =>{
         //@ts-ignore
        dispatch(getNoteTC())
    }

    return (
        <div  className= {state.tags.length !== 0 ? "input_wrapper":""}>
            {state.tags.map((tag, index)=>{
              return  <div className="tags" onClick={()=> onTagFilter(index)}>
                  {tag}
                </div>
            })}
            <button className="button" onClick={()=>onTagAll()}>ALL</button>
        </div>
    );
};

export default InputTag;