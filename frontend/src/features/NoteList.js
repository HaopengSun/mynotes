import React, { useEffect, useState } from 'react'

const NoteList = () => {
  let [notes, setNotes] = useState([]);

  let getNotes = async () => {
    let response = await fetch('http://127.0.0.1:8000/notes');
    let data = await response.json();
    setNotes(data);
  }

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div>
      <div className="noteList">
        {notes.map((note, index) => <h5 key={index}>{note.body}</h5>)}
      </div>
    </div>
  )
}

export default NoteList