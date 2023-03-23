
import "./Footer.scss"
import Button from "../Button /Button"


function Footer(){
    return(
        <footer className="foter">
            <div className="container">
                <h2>Assalomu aleykum</h2>
             <Button type="button" text="Click" color="primary"/>
             <Button type="click" text="bosildi" color="primary"/>
             <Button type="button" text="Button" color="danger"/>
          

            </div>
        </footer>
    )
}

export default Footer