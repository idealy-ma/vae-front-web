import { Link } from "react-router-dom"

export function RechargeItem(props){

    function validate(id) {
        fetch("https://venteauxenchere-backoffice-production.up.railway.app/rechargements",{
            method:'POST',
            headers:{
                "idRechargement":id,
                "userId":localStorage.getItem("userId"),
                "hash":localStorage.getItem("hash")
            },
        }).then((result)=>{
            return result.json();
        }).then((e)=>{
            if(e.error !== undefined){
                console.log(e.error);
            } else {
                props.react();
            }
        },(e)=>{
            console.log(e);
        })
    }
    return(
        <div>
            <div class="card shadow border-start-success">
                <div class="card-header">
                    <h6 className="text-info fw-bold">Demande</h6>
                </div>
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="col me-2">
                            <p><span className="fw-bold">Nom : </span>{props.valeur.client.nom}</p>
                            <p><span className="fw-bold">prenom : </span>{props.valeur.client.prenom}</p>
                            <p><span className="fw-bold">solde actuel : </span>{props.valeur.client.soldeClient}</p>
                            <hr />
                            <p><span className="fw-bold text-success">Demande : </span>{props.valeur.montant}</p>
                        </div>
                        <div><Link className="btn btn-success text-light w-100" onClick={(e)=>{validate(props.valeur.idRechargement)}}>Valider</Link></div>
                        {/* <div><Link className="btn btn-warning text-light w-100">Rejeter</Link></div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}