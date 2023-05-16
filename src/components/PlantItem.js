import CareScale from "./CareScale.js"
import "../styles/PlantItem.css"

function handleClick(plantName){
    //console.log("Ceci est mon event:",e)
    //console.log("💫 Ceci est un clic 💫")
    alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱💫`)

}

function PlantItem({name, cover, light, water, price}){
    return(
        //création de la fonction handleClick, puis ajout du onClick={handleClick} ds la balise
        <li className="lmj-plant-item" onClick={() => handleClick(name)} >
            <span className="lmj-plant-item-price">{price}€</span>
            <img className="lmj-plant-item-cover" src={ cover } alt={`${name} cover`} />
            {name}
            <div>
                <CareScale careType="water" scaleValue={water} />
                <CareScale careType="light" scaleValue={light} />
            </div>
        </li>
    )
}

export default PlantItem



