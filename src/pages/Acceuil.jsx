import { EnchereItem } from "../components/EnchereItem";

export default function Acceuil(){
    return(
        <div>
            <div class="container">
                <h1>Liste des encheres</h1>
                <EnchereItem/>
                <EnchereItem/>
                <EnchereItem/>
            </div>
        </div>
    );
}