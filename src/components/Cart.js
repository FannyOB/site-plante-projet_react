import "../styles/Cart.css"

function Cart(){
    const monsteraPrice = 8
    const ivyPrice = 10
    const flowersPrice = 15

    return(
            <div className="lmj-cart">
            <ul>
                <li>Monstaera :{monsteraPrice}$</li>
                <li>Lierre :{ivyPrice}$</li>
                <li>Bouquet de Fleurs :{flowersPrice}$</li>
            </ul>
            Total: {monsteraPrice + ivyPrice + flowersPrice}$
            </div>
        
    ) 
}
export default Cart