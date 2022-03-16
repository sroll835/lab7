import React, {useState} from 'react';

const form = (props) => {
  
  const [inputText, setInputText] = useState("");

  const manejarFormulario = (event) => {
    setInputText(event.target.value);
  }

  const submit = (event) => {
    event.preventDefault();
    if(inputText.trim() != ""){
      props.nuevaTarea(inputText);
      setInputText("");
      setValidacion(true);
    } else {
      setValidacion(false);
    }
    props.nuevaTarea(inputText);
  }

  return(
     <div>
       <form className='form' onSubmit={submit}>
          <span>Añadir tarea</span>
          <input value={inputText} onChange={manejarFormulario}/>
          <button> Añadir </button>
       </form>
       {
          !validacion &&
          <div className='validacion'>
            Añada una tarea, por favor
          </div>
       }
     </div>
  )

}