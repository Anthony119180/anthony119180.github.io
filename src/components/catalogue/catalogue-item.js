import React from "react";
import "./catalogue.css"
import "../common/common.css"
import pic from "../../assets/img/itempic_0001.png"

const CatalogueItem = ()=>{
    return (
        <div class = "item-bg translucent-bg">
            <a href="https://www.linkedin.com/in/anthony119180/" class = "item-link">
                <img src = {pic} class = "item-img"></img>
                <p class = "item-title text_black i18n_text">TITLE:XXXXX</p>
            </a>
            <p class = "item-midtext text_grey i18n_text">
                This is a test of English text to check if the styles are visually appealing
                <br/>This is a test of English text to check if the styles are visually appealing.
                This is a test of English text 
            </p>
            <p class = "item-keyword text_grey i18n_text">Keyword:Unity Lua C# PS</p>
        </div>
    );
}

export default CatalogueItem;