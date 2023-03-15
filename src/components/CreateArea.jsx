import React from "react";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [isExpanded, setExpanded ] = React.useState(false);
  const [currentTitle, setCurrentTitle] = React.useState("");
  const [currentContent, setCurrentContent] = React.useState("");

  function expand(){
    setExpanded(true);
  }

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
      <form className="create-note">
        {isExpanded ? <input
          onChange={handleTitle}
          value={currentTitle}
          name="title"
          placeholder="Titulo"
        /> : null}
        <textarea
          onChange={hancleContent}
          onClick={expand}
          value={currentContent}
          name="content"
          placeholder="Ingresa la nota ...."
          rows={isExpanded? 3: 1}
        />
        <Zoom in={isExpanded}>
          <Fab color="danger" aria-label="add" onClick={handleClick}>
            <AddCircleOutlinedIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
