import "../styles/Cart.css"
import { useState } from "react"

/**Cart=Panier, stateful component grâce à useState
 * cela veut dire que le composant Cart peut être re-render autant de fois que nécessaire, mais la valeur du panier sera préservée. */

function Cart(){
    const monsteraPrice = 8

    /*on crée un state cart
     Avec useState, nous devons déclarer en même temps une fonction pour mettre à jour ce state ( updateCart  ), 
    et lui attribuer une valeur initiale, qui sera ici de 0 : */
    const[cart, updateCart] = useState(0)


    const [isOpen, setIsOpen] = useState(false)
   
    //const [isEmpty, setIsEmpty] = useState(true)

    return isOpen ? (
        <div className="lmj-cart">
            <button
                className="lmj-cart-toggle-button"
                onClick={() => setIsOpen(false)}
                >
                    Fermer
                </button>
            <h2>Pannier</h2>
            <div>Monstera : {monsteraPrice}€</div>
            <button onClick={() => updateCart(cart + 1)}>Ajouter </button> {/**bouton qui permet d'ajouter un monstera */}
            <h3>Total : {monsteraPrice * cart}€</h3>
            <button onClick={() => updateCart(0) }>vider le panier</button>{/**quand je clique sur le bouton, cela réinitialise le state de ma cart  */}

        </div>
        
    ) : (
        <div className="lmj-cart-closed">
             <button 
                className="lmj-cart-toggle-button"
                onClick={() => setIsOpen(true)}
            >
                Ouvrir le panier
            </button>
        </div>
    )
}
export default Cart