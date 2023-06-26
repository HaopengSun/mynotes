import React, { useEffect, useState } from 'react'
import Note from '../components/Note'

const NoteList = () => {
  let [notes, setNotes] = useState([]);

  let getNotes = async () => {
    let response = await fetch('/notes');
    let data = await response.json();
    setNotes(data);
  }

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div>
      <div className="noteList">
        {notes.map((note, index) => <Note key={index} note={note} />)}
      </div>
    </div>
  )
}

export default NoteList