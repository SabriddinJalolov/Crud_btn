
import "./Header.scss"

import Button from "../Button /Button"


function Header({logo}){
    return(
        <header className="site-header">
            <div className="container">
                <img src={logo} alt="dsd" />
                <h1 className="title">CRUD</h1>



                <Button type="submit" text="Click" color="succes"/>

            </div>

        </header>
    )
}

export default Header