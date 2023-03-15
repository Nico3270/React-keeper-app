import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [elementos, setElementos] = useState([]);

  function Delete(idElement) {
    setElementos((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== idElement;
      });
    });
  }

  function Agregar(titulo, contenido) {
    setElementos([...elementos, { title: titulo, content: contenido }]);
  }

  let notasFinales = elementos.map((nota) => {
    const id = elementos.indexOf(nota);
    return (
      <Note
        key={id}
        title={nota.title}
        content={nota.content}
        eliminar={Delete}
        id={id}
      />
    );
  });
  return (
    <div>
      <Header />
      <CreateArea funcion={Agregar} />
      {notasFinales}
      <Footer />
    </div>
  );
}

export default App;
