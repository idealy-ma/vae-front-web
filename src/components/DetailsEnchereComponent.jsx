import "./DetailsEnchereComponent.css"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function DetailsEnchereComponent(props){
    const [enchere,setEnchere] = useState();
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState("");
    const [soldeMise, setSolde] = useState(0);

    const navigate = useNavigate();
    function getEncheres(id){
        const userId = localStorage.getItem("userId");
        const hash = localStorage.getItem("hash");
        if(userId === null || hash === null){
            navigate("/Login");
        } else {
            fetch(("https://vae-client-backend-production.up.railway.app/encheres/"+id),{
                method:"GET",
                headers:{
                    "userId":userId,
                    "hash":hash
                }
            }).then((result)=>{
                return result.json();
            }).then((res)=>{
                // alert(JSON.stringify(res));
                if(res.data !== undefined){
                    const data = res.data;
                    setEnchere(data[0]);
                    setLoaded(true);
                } else {
                    alert("Could not retrive data")
                }
            },(err)=>{
                alert("Server Error")
            })
        }
    }

    function mise(idEnchere) {
        // alert(JSON.stringify(enchere));
        const userId = localStorage.getItem("userId");
        const hash = localStorage.getItem("hash");
        fetch(("https://vae-client-backend-production.up.railway.app/mises"),{
                method:"POST",
                headers:{
                    "Content-Type":'application/json',
                    "userId":userId,
                    "hash":hash
                },
                body:JSON.stringify({
                    "soldeMise":soldeMise,
                    "idClient":userId,
                    "idEnchere":idEnchere
                })
            }).then((result)=>{
                return result.json();
            }).then((res)=>{
                // alert(JSON.stringify(res));
                if(res.data !== undefined){
                    const data = res.data;
                    setLoaded(true);
                } else if(res.error !== undefined) {
                    setError(res.error.message);
                } else {
                    setError("Server Error");
                }
            },(err)=>{
                alert("Server Error")
            })
    }

    useEffect(()=>{
        getEncheres(props.idEnchere);
    },[]);
    
    if(!loaded) {
        return(
            <p>loading...</p>
        )
    } else {
        return (
            <div className="h-full">
                <div class="padd">
                    <h1> {enchere.nomProduit} </h1>
                    <img class="zoom" src={enchere.lesSary[0]} alt="Red dot" />
                </div>
                <hr />
                <div>
                    <div class="i-block details h-full">
                        <div>
                            <h1> {enchere.nomProduit} </h1>
                        </div>
                        <p><b>Categorie : </b> {enchere.categorie.nomCategorie} </p>
                        <p><b>Prix Actuel : </b> {enchere.prixMin} </p>
                        <div>
                            <div className="desc" >Description </div>
                            <p>{enchere.description}</p>
                        </div>
                    </div>
                    <div class="i-block money h-full">
                        <h3> Miser </h3>
                        <p className="err">{error}</p>
                        <div>
                            <input class="text" type="number" onChange={(e)=>{setSolde(e.target.value)}} value={soldeMise} placeholder="ex : 10 000"/>
                        </div>
                        <div>
                            <input className="button" onClick={(e)=>{mise(enchere.idEnchere)}} type="button" value="Miser"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}