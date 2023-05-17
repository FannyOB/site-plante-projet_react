import { useState } from "react"
import Banner from "./Banner"
import logo from "../assets/logo.png"
import Cart from "./Cart"
import Footer from "./Footer"
import ShoppingList from "./ShoppingList"
import "../styles/Layout.css"

function App(){
    //(Pour faire remoneter l'état&mise à jour du composant enfant) on commence par faire remonter cart ds App.js
    const[cart, updateCart] = useState([]) 
    const [ isFooterShown, updateIsFooterShown] = useState()
    return(
        <div>
            <Banner>
                <img src={logo} alt="La maison jungle" className="lmj-logo" />
                <h1 className="lmj-title">La maison jungle</h1>
            </Banner>

            <div className="lmj-layout-inner">
                <Cart cart={cart} updateCart={updateCart}/>   {/*Puis dans le JSX, je passe  cart   ainsi que  updateCart  en props : */}
                <ShoppingList cart={cart} updateCart={updateCart}/>
            </div>
            { <button onClick = {() => updateIsFooterShown(!isFooterShown)} >
                Cacher !
            </button>}
            {isFooterShown && <Footer cart={cart} />}
            
        </div>
    )
}

export default App