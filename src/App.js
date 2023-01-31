import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from './pages/NoPage';
import Login from './pages/Login';
import Acceuil from './pages/Acceuil';
import './App.css';
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/fonts/fontawesome-all.min.css';
import Commission from './pages/Commision';
import ListeDemande from './pages/ListeDemande';
import Statistique from './pages/Statistique';
function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Acceuil" element={<Acceuil />} />
          <Route path="/Commission" element={<Commission />} />
          <Route path="/Demande" element={<ListeDemande></ListeDemande>} />
          <Route path="/Statistique" element={<Statistique></Statistique>} />
          <Route path="*" element={<NoPage />} />
          {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
