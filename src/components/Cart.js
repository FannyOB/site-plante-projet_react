import { useState,useEffect } from "react"
import "../styles/Cart.css"

/**Cart=Panier, stateful component grâce à useState
 * cela veut dire que le composant Cart peut être re-render autant de fois que nécessaire, mais la valeur du panier sera préservée. */

function Cart({ cart, updateCart }){
    const [isOpen, setIsOpen] = useState(true)
    const [activeCategory, setActiveCategory] = useState("activeCategory, setActiveCategory")

    const total= cart.reduce(
        (acc, plantType) => acc + plantType.amount * plantType.price,
        0
    )
//changement de titre en fonction du total du panier
    useEffect(() => {
        document.title = `LMJ: ${total}€ d'achats`
    }, [total])

    /*useEffect(() => {
        alert(`J'aurai ${total}€ à payer 💸`)
    }, [total, activeCategory] )    */


    return isOpen ? (
        <div className="lmj-cart">
            <button
                className="lmj-cart-toggle-button"
                onClick={() => setIsOpen(false)}
                >
                    Fermer
                </button>
                {cart.length > 0 ? (
                <div>
                    <h2>Panier</h2>
                    <ul>

                        {cart.map(({ name, price, amount }, index) => (
                            <div key={`${name}- ${index}`}>
                                {name} {price}€ x {amount} 
                            </div>
                        ))}
                    </ul>
                    <h3> Total: {total}€</h3>
                    <button onClick={() => updateCart([]) }>vider le panier</button>{/**quand je clique sur le bouton, cela réinitialise le state de ma cart  */}
                </div>
                ):(
                    
                <div>Votre panier est vide</div>
                    
                )}   
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