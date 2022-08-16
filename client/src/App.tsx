import './App.css';
import Header from "./components/header/Header";
import InputArea, {noteType} from "./components/inputArea/InputArea";
import Count from "./components/count/Count";
import Note from "./components/note/Note";
import Footer from "./components/footer/Footer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store";
import {addNoteAC, deleteNoteAC, NotesStateType, setTagAC} from "./redux/notes-reducer";
import InputTag from "./components/inputTag/inputTag";

 const App = () => {

     const dispatch = useDispatch()
     // @ts-ignore
     const state = useSelector<AppRootStateType, NotesStateType>(state => state.notes)

        const addNote = (title:string, content:string) => {
          dispatch(addNoteAC(title, content))
        };

        const deleteNotes = (id:number) => {
            dispatch(deleteNoteAC(id))
            dispatch(setTagAC())
        };
  return (
    <div className="App">
      <Header />
        <Count />
        <InputArea onAdd={addNote} />
        <InputTag/>
      {state.notes.map((note) => (
          <Note
              key = {note.id}
              id={note.id}
              title={note.title}
              content={note.content}
              onDelete={deleteNotes}
          />
      ))}
      <Footer />
    </div>
  );
};

export default App;
