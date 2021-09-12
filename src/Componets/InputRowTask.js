import React from 'react'

export const InputRowTask = ({ data, setDataToEdit }) => {
  return (
    <>
      <tr>
        <td>{data.task}</td>
        <td>
          <button onClick={()=> setDataToEdit(data)} >Editar</button>
          <button>Eliminar</button>
        </td>
      </tr>
    </>
  )
}
