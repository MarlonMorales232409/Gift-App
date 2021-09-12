import React from 'react'

export const InputRowTask = ({data}) => {
  return (
    <>
      <tr>
        <td>{data}</td>
        <td>
          <button>Editar</button>
          <button>Eliminar</button>
        </td>
      </tr>
    </>
  )
}
