import { BrowserRouter, Routes, Route } from 'react-router-dom';
import injectContext from "./store/context";
import './App.css';
import Home from './views/Home';
import AddContact from './views/AddContact';
import EditContact from './views/EditContact'; // Añadir esta línea

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-contact" element={<AddContact />} />
        <Route path="/edit-contact/:id" element={<EditContact />} /> {/* Añadir esta línea */}
      </Routes>
    </BrowserRouter>
  );
}

export default injectContext(App);
