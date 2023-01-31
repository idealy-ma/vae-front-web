import { useState, useEffect } from "react";
import { NavBar } from "../components/NavBar";

export default function Commission(){
    const [comission, setComission] = useState();
    const [nomCategorie, setNomCategorie] = useState();


    function getComission() {
        fetch("https://venteauxenchere-backoffice-production.up.railway.app/commissions",{
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
                let data = e.data;
                let i = 0;
                data?.map((value)=>{
                    i++;
                });
                console.log(i);
                setComission(data[i-1].pourcentage);
                // console.log(data.pourcentage);
            }
        },(e)=>{
            console.log(e);
        });
        
    }

    function addEnchere() {
        fetch("https://venteauxenchere-backoffice-production.up.railway.app/categories",{
            method:'POST',
            headers:{
                "Content-type":"application/json",
                "userId":localStorage.getItem("userId"),
                "hash":localStorage.getItem("hash")
            },
            body:JSON.stringify({"nomCategorie":nomCategorie})
        }).then((result)=>{
            return result.json();
        }).then((e)=>{
            if(e.error !== undefined){
                console.log(e.error);
                // setError("Aucun resultat");
            } else {
                // getListeCategorie();
            }
        },(e)=>{
            console.log(e);
        });
    }

    function addComission() {
        fetch("https://venteauxenchere-backoffice-production.up.railway.app/commissions",{
            method:'POST',
            headers:{
                "Content-type":"application/json",
                "userId":localStorage.getItem("userId"),
                "hash":localStorage.getItem("hash")
            },
            body:JSON.stringify({"pourcentage":comission})
        }).then((result)=>{
            return result.json();
        }).then((e)=>{
            if(e.error !== undefined){
                console.log(e.error);
            } else {
                getComission();
                // let data = e.data;
                // // setListeCategorie(data);
            }
        },(e)=>{
            console.log(e);
        });
    }

    useEffect(()=>{
        getComission();
    },[]);

    return (
        <div>
            <NavBar/>
            <div className="container">
                <h2>Configuration</h2>
                <div className="row">
                    <div className="col-md-5">
                        <div className="card shadow"  style={{marginTop:"30px",marginRight:"5%"}}>
                            <div className="card-header">
                                <h6 className="fw-bold text-primary">Ajout de categorie</h6>
                            </div>
                            <div className="card-body">
                                <form action="">
                                    <div className="form-group">
                                        <label>Nom Categorie</label>
                                        <input type="text" className="form-control" name="nomCategorie" onChange={(e)=>{setNomCategorie(e.target.value)}}/>
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <input class="btn btn-primary form-control" onClick={(e)=>{addEnchere()}} type="button" value={"Inserer"}/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-5" style={{marginTop:"30px"}}>
                        <div className="card shadow">
                            <div className="card-header">
                                <h6 className="fw-bold text-primary">Gestion de commission</h6>
                            </div>
                            <div className="card-body">
                                <form action="">
                                    <div className="form-group">
                                        <label>Pourcentage % </label>
                                        <input type="text" className="form-control" onChange={(e)=>{setComission(e.target.value)}} value={comission} />
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <input class="btn btn-primary form-control" onClick={(e)=>{addComission()}} type="button" value={"Modifier"}/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}