import { Link } from "react-router-dom";

export function EnchereItem(){
    return (
        <div>
            <div>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4
                //8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==" alt="Red dot" />
            </div>
            <div>
                <h3>Rolex</h3>
                <p>Motre rolex</p>
                <p>10 000 ar</p>
            </div>
            <div>
                <Link to="/" class="btn btn-success">Participer</Link>
            </div>
        </div>
    )
}