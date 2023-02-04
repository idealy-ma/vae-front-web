import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from './pages/NoPage';
import Login from './pages/Login';
import Acceuil from './pages/Acceuil';
import HistoriqueEnchere from './pages/HistoriqueEnchere';

import DetailsEnchere from './pages/DetailsEnchere';
import './App.css';
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/fonts/fontawesome-all.min.css';
function App() {

  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Acceuil />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/HistoriqueEnchere" element={<HistoriqueEnchere />} />
            <Route path="/DetailsEnchere/:idEnchere" element={<DetailsEnchere />} />
            <Route path="*" element={<NoPage />} />
            
        </Routes>
      </BrowserRouter>
  );
}

export default App;
