import { Link } from "react-router-dom";
import { AdvancedSearch } from "../components/AdvancedSearch";
import "./NavBar.css";

export function NavBar() {
    return(
        <div className="nav-bar" >
            <AdvancedSearch />
        </div>
    );
}