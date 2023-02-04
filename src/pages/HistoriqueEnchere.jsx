import { DetailsEnchereComponent } from "../components/DetailsEnchereComponent";
import { NavBar } from "../components/NavBar";

export default function HistoriqueEnchere(){
    return (
        <>
            <NavBar page={"Historique Enchere"}/>
            <div className="body">
                <div class="container">
                    <div>
                        <DetailsEnchereComponent enchere={1}/>
                    </div>
                </div>
            </div>
        </>
    )
}