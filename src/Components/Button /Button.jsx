import React from "react";
import "./Button.scss"

function Button({type,
    text,
    color,
    hasIcon,
    iconClass,
    iconWidth,
    iconHeight,
    deleteProduct,
    iconAlt}){
    return(
        <button className={`button ${color}`}
         type={type}
         onClick={deleteProduct}
         >{text}
        {hasIcon &&(
            <img className={iconClass} src={hasIcon} width={iconWidth} height={iconHeight} alt={iconAlt} />
        )}
        </button>
    )

    
}



export default Button;