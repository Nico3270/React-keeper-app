import React from "react";

function CreateArea(props) {
  const [currentTitle, setCurrentTitle] = React.useState("");
  const [currentContent, setCurrentContent] = React.useState("");

  function handleTitle(event) {
    let newtile = event.target.value;
    setCurrentTitle(newtile);
  }

  function hancleContent(event) {
    let newContent = event.target.value;
    setCurrentContent(newContent);
  }
  
  function handleClick(event) {
    ///Por lo tanto, en resumen, la línea event.preventDefault() 
    //evita que la página se recargue o se envíe el formulario al servidor cuando se hace clic en el botón "Add".
    event.preventDefault();
    props.funcion(currentTitle, currentContent);
    setCurrentTitle("");
    setCurrentContent("");
  }

  return (
    <div>
      <form>
        <input
          onChange={handleTitle}
          value={currentTitle}
          name="title"
          placeholder="Titulo"
        />
        <textarea 
        onChange={hancleContent}
        value={currentContent}
        name="content" placeholder="Ingresa la nota ...." rows="3" />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
