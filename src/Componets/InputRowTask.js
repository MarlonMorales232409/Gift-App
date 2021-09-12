import React from 'react'

export const InputRowTask = ({ data, setDataToEdit, delData }) => {
  return (
    <>
      <tr>
        <td>{data.task}</td>
        <td>
          <button onClick={()=> setDataToEdit(data)} >Editar</button>
          <button onClick={()=> delData(data.id)}>Eliminar</button>
        </td>
      </tr>
    </>
  )
}
