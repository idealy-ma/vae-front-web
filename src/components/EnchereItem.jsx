import { Link } from "react-router-dom";
import "./EnchereItem.css";

export function EnchereItem( props ){
    return (
        <div class="i-block card-round shadow" >
            <div className="img">
                <img src={props.enchere.lesSary[0]} className="img" alt="Red dot" />
            </div>
            <div className="info">
                <h3>{props.enchere.nomProduit}</h3>
                <p>{props.enchere.categorie.nomCategorie}</p>
                <p>{props.enchere.prixMin} Ar</p>
            </div>
            <div>
                <Link to={"/DetailsEnchere/"+props.enchere.idEnchere} class="button">Participer</Link>
            </div>
        </div>
    )
}