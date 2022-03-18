import React from 'react';
import tarea from './componentes/tarea'
import '../App.css'

const tarea = (props)=> {
    return(
        <div>
            <div className='tarea'>
                <span>{props.tarea}</span>
            </div>

            {
                ListaTareas.map(e => <tarea tarea={e}/>)
            }

        </div>

    )
}