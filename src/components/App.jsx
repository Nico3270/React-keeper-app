import React from "react";
import  ReactDOM  from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notas from "../notes";


function App(){
   const renderNotes = notas.map(nota =>(
      <Note 
         key={nota.id}
         titulo={nota.titulo}
         contenido={nota.contenido}
         />
   ));
   return <div>
    <Header />
    {renderNotes}
    <Note 
      titulo="Hola Mundo"
      contenido="Funciona correctamente los props"
    />
    <Footer />
   </div>
};

export default App