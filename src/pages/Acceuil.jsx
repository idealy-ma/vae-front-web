import { EnchereItem } from "../components/EnchereItem";
import { AdvancedSearch } from "../components/AdvancedSearch";
import { BoxLoading } from "../components/BoxLoading";
import { NavBar } from "../components/NavBar";
import { useState, useEffect } from "react";

import "./Acceuil.css";

export default function Acceuil(){
    const [encheres,setEncheres] = useState();
    const [load,setLoad] = useState(false);

    const getEncheres = (loaded) => {
        if(loaded==false){
            fetch("https://vae-client-backend-production.up.railway.app/encheres")
            .then((res)=>{
                return res.json();
            }).then((res)=>{
                if(res.error !== undefined){
                    alert("Error");
                } else {
                    setEncheres(res.data);
                    setLoad(true);
                }
            },(err)=>{
                console.log("Server Error")
            })
        }
    }

    useEffect(()=>{
        getEncheres(load);
    },[])

    if(!load){
        return (
            <>
                <NavBar page={"Acceuil"}/>
                <div className="body">
                    <div class="container">
                        <div className="i-block w-25">
                            <AdvancedSearch />
                        </div>
                        <div class="i-block w-75">
                            <BoxLoading />
                            <BoxLoading />
                            <BoxLoading />
                            <BoxLoading />
                            <BoxLoading />
                            <BoxLoading />
                            <BoxLoading />
                            <BoxLoading />
                            <BoxLoading />
                            <BoxLoading />
                            <BoxLoading />
                            <BoxLoading />
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return(
            <>
                <NavBar page={"Acceuil"}/>
                <div className="body">
                    <div class="container">
                        <div className="i-block w-25">
                            <AdvancedSearch />
                        </div>
                        <div class="i-block w-75">
                            {encheres?.map((value)=> <EnchereItem enchere={value} /> )}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}