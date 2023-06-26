import React from 'react'

const Note = ({ note }) => {
  return (
    <div>
      <h3>{note.body}</h3>
    </div>
  )
}

export default Note