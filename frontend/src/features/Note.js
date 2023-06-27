import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

const Note = () => {
  let { id } = useParams(); 
  let [note, setNote] = useState('');

  let getNote = async () => {
    let response = await fetch(`/notes/${id}`);
    let data = await response.json();
    setNote(data);
  }

  useEffect(() => {
    getNote();
  }, []);

  return (
    <div>
      <h3>{note.body}</h3>
    </div>
  )
}

export default Note