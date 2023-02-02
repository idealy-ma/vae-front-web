import { Link } from "react-router-dom";
import "./EnchereItem.css";

export function EnchereItem( props ){
    return (
        <div class="card-round shadow" >
            <div>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4
                    //8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==" alt="Red dot" />
            </div>
            <div>
                <h3>{props.enchere.nomProduit}</h3>
                <p>{props.enchere.nomCategorie}</p>
                <p>{props.enchere.prixMin}</p>
            </div>
            <div>
                <Link to="/" class="btn btn-success">Participer</Link>
            </div>
        </div>
    )
}