import react, {useState} from "react";
import formularioTarea from './componentes/formularioTarea';
const express = require('express')
const app = express();


app.use('/public', express.static(`${__dirname}/img`))

function App() {

  const [ListaTareas, setListaTareas] = useState([]);

  const nuevaTarea = (Tarea) => {
    setListaTareas([tarea,...setListaTareas]);
  }

  return(
    <div className='App'>
      <formularioTarea
        nuevaTarea={nuevaTarea}
      />

      {
        ListaTareas.map(e => <div>{e}</div>)
      }
      
    </div>

  )

}

export default App;
