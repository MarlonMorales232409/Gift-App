import React from 'react'
import './style_component/inputRowTask.css' 

export const InputRowTask = ({ data, setDataToEdit, delData, setTaskComplete }) => {

  const completeTask = () => {
    data.complete = true;
    setTaskComplete(data)
  }

  return (
    <>
      <tr>
        <td className = {data.complete ? "complete" : "incomplete"} >{data.task}</td>
        <td>
          <button onClick={completeTask} >Completado</button>
          <button onClick={()=> setDataToEdit(data)} >Editar</button>
          <button onClick={()=> delData(data.id)}>Eliminar</button>
        </td>
      </tr>
    </>
  )
}
