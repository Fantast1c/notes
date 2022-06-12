import React, {useState} from 'react';
import './App.css';
import Header from "./components/header/Header";
import InputArea, {noteType} from "./components/inputArea/InputArea";
import Count from "./components/count/Count";
import Note from "./components/note/Note";
import Footer from "./components/footer/Footer";

function App() {

        const [notes, setNotes] = useState([]);

        const addNote = (newNote:noteType) => {
            // @ts-ignore
            setNotes((prevValue) => {

                return [...prevValue, newNote];
            });
        };

        const deleteNotes = (id:number) => {
            setNotes((preValue) => {
                return [...preValue.filter((note, index) => index !== id)];
            });
        };

        const editNotes = () => {
            
        }

  return (
    <div className="App">
      <Header />
        <Count
            notes = {notes}
        />
        <InputArea onAdd={addNote} />
      {notes.map((note:any, index) => (
          <Note
              key={index}
              id={index}
              title={note.title}
              content={note.content}
              onDelete={deleteNotes}
          />
      ))}
      <Footer />
    </div>
  );
}

export default App;
