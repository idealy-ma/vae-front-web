import { DetailsEnchereComponent } from "../components/DetailsEnchereComponent";
import { NavBar } from "../components/NavBar";
import { useParams } from "react-router";


export default function DetailsEnchere(){

    const { idEnchere } = useParams();

    return(
        <>
            <NavBar page={"Details Enchere"}/>
            <div className="body">
                <div class="container">
                    <div>
                        <DetailsEnchereComponent idEnchere={idEnchere}/>
                    </div>
                </div>
            </div>
        </>
    );
}