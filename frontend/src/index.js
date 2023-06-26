import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Note from "./features/Note";
import ReactDOM from 'react-dom/client'

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<App />} />
      <Route path="/note/:id" element={<Note />} />
    </Routes>
  </BrowserRouter>
);
