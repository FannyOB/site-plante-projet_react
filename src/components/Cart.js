import "../styles/Cart.css"
import { useState } from "react"

/**Cart=Panier, stateful component grâce à useState
 * cela veut dire que le composant Cart peut être re-render autant de fois que nécessaire, mais la valeur du panier sera préservée. */

function Cart(){
    const monsteraPrice = 8
    /*on crée un state cart. Avec useState, nous devons déclarer en même temps une fonction pour mettre à jour ce state ( updateCart  ), 
    et lui attribuer une valeur initiale, qui sera ici de 0 : */
    const[cart, updateCart] = useState(0)
   

    return(
        <div className="lmj-cart">
            <h2>Pannier</h2>
            <div>
                Monstera : {monsteraPrice}€
                <button onClick={() => updateCart(cart + 1)}>
                    Ajouter
                </button>
            </div>
            <h3>Total : {monsteraPrice * cart}€</h3>    
        </div>
        
    ) 
}
export default Cart