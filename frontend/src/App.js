import './App.css';
import Header from './components/Header.js';
import NoteList from './features/NoteList.js'

function App() {
  return (
    <div className="App">
      <Header />
      <NoteList />
    </div>
  );
}

export default App;