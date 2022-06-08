import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import InputArea from "./components/inputArea/InputArea";
import Count from "./components/count/Count";
import Note from "./components/note/Note";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
        <Count/>
        <InputArea />
          <Note/>
      <Footer />
    </div>
  );
}

export default App;
