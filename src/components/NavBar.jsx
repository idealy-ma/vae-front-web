import { Link } from "react-router-dom";
import "./NavBar.css";

export function NavBar(props) {
    return(
        <div className="nav-bar flex">
            <h3 className="title">Enchere</h3>
            <div>
                <h1 className="title">{props.page}</h1>
            </div>
            <nav>
                <div><Link to="/">Acceuil</Link></div>
                <div><Link to="/HistoriqueEnchere" >Historique Enchere</Link></div>
                <div><Link to="/Login" >Login</Link></div>
            </nav>
        </div>
    );
}