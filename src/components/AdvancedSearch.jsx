import "./AdvancedSearch.css";
import "./EnchereItem.css";

export function AdvancedSearch(){
    return (
        <div class="search-box shadow">
            <div className="flex form-input">
                <div >
                    <label >Mot cle :</label>
                    <input type="text" placeholder="mot-cle"/>
                </div> 
                <div>
                    <label>Categorie :</label>
                    <select>
                        <option value="">Bijoux</option>
                        <option value="">Client</option>
                    </select>
                </div> 
                <div>
                    <label>Prix min</label>
                    <input type="number" placeholder="mot-cle"/>
                </div>  
                <div>
                    <label>Prix max</label>
                    <input type="number" placeholder="mot-cle"/>
                </div> 
                <div>
                    <label>Status :</label>
                    <select>
                        <option value="">En cours</option>
                        <option value="">Terminer</option>
                    </select>
                </div>
            </div>
        </div>
    );
}