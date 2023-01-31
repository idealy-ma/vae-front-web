export function CategorieItem(props){
    return(
        <tbody>
            <tr>
                <td>{props.categorie.idCategorie}</td>
                <td>{props.categorie.nomCategorie}</td>
            </tr>
        </tbody>
    );
}