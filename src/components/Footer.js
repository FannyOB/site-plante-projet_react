import {useState, useEffect } from "react";
import "../styles/Footer.css"


function Footer({cart}){
/**On ajoute un input pour récupérer le mail de l'utilisateur, en appliquant la méthode de composant contrôlé.
 On s'inspire de la syntaxe du state que nous avons utilisée dans ce chapitre pour inputValue et setInputValue
qui utilise useState  */

    const [inputValue, setInputValue] = useState("")

    //useEffect(() =>{
    //    console.log(`1️⃣ Cette alerte s'affiche à chaque rendu`)
   // })

       
  //useEffect(() =>{
    //console.log(`2️⃣ Cette alerte s'affiche au premier rendu`)
    // }, [])

     //useEffect(() =>{
     //    console.log(`3️⃣ Cette alerte s'affiche la première fois et quand mon panier est mis à jour`)
     //}, [cart])

      useEffect(() =>{
         return () =>
       console.log(`4️⃣ Cette alerte s'affiche quand à chaque rendu`)
     }, [cart])
    


            //déclaration fonction
            function handleInput(e){
                setInputValue(e.target.value)
            }

                    
            
            return(
                <footer className="lmj-footer">
                    <div className="lmj-footer-elem">
                        Pour les passionné-e-s de plantes 🌿🌱🌵
                    </div>
                    <div className="lmj-footer-elem">Laissez-nous votre mail :</div>
                    <input
                            placeholder="Entrez votre mail"
                            onChange={handleInput}//appel de la fonction
                            value={inputValue}
                           
                        />
                </footer>
            )
}

export default Footer