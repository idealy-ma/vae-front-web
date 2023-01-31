import { useEffect, useState } from "react";
import { NavBar } from "../components/NavBar";
import { RechargeItem } from "../components/RechargeItem";

export default function ListeDemande(){
    const [listeDemande, setListeDemande] = useState();

    const getListeDemande = () => {
        fetch("https://venteauxenchere-backoffice-production.up.railway.app/rechargements",{
            method:'GET',
            headers:{
                "userId":localStorage.getItem("userId"),
                "hash":localStorage.getItem("hash")
            },
        }).then((result)=>{
            return result.json();
        }).then((e)=>{
            if(e.error !== undefined){
                console.log(e.error);
                
            } else {
                setListeDemande(e);
            }
        },(e)=>{
            console.log(e);
        });
    }

    useEffect(()=>{
        getListeDemande();
    },[]);

    return (
        <div>
            <NavBar/>
            <div className="container">
                <div>
                    <h1>Liste des demandes</h1>
                    <div className="row">
                        {listeDemande?.data?.map((value)=>{
                            return(
                                <div className="col-md-3 col-sm-5" style={{marginTop:"30px"}}>
                                    <RechargeItem valeur={value} react={getListeDemande} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}