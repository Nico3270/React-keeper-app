function Note(props) {
  return <div className="note">
    <h1>{props.titulo}</h1>
    <p>{props.contenido}</p>
  </div>;
}

export default Note