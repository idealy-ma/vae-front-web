import { EnchereItem } from "../components/EnchereItem";
import { AdvancedSearch } from "../components/AdvancedSearch";
import { useState, useEffect } from "react";

export default function Acceuil(){
    const [encheres,setEncheres] = useState();

    function getEncheres() {
        const enchereList = [
            {
                "idEnchere": 2,
                "nomProduit": "Bague",
                "dateDebut": "2023-01-20T08:33:22.320+00:00",
                "dateFin": "2023-01-20T09:00:00.000+00:00",
                "prixMin": 5000.0,
                "description": "Ceci est un collier",
                "nomCategorie": "Bijoux",
                "idCategorie": 1,
                "nom": "Anjara",
                "prenom": "Joston",
                "idClient": 1,
            }
        ]

        return enchereList;
        // fetch("");
    }

    useEffect(()=>{
        setEncheres(getEncheres());
    },[])


    return(
        <div>
            <div class="container">
                <h1>Liste des encheres</h1>
                <AdvancedSearch />
                {encheres?.map((value)=> <EnchereItem enchere={value} /> )}
                {/* <EnchereItem/>
                <EnchereItem/> */}
            </div>
        </div>
    );
}