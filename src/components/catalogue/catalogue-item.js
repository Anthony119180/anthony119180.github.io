import React from "react";
import "./catalogue.css"
import "../common/common.css"
import Articles from "../../assets/article/articles"

const CatalogueItem = ({ id }) => {
    const val = Articles.find(item=> item.id === parseInt(id));
    const {article} = val;
    if (!article) {
        return <div class="item-bg translucent-bg">
            <div>Article Not Found</div>
        </div>
    }

    return (
        <div class="item-bg translucent-bg">
            <img src={article.pic} class="item-img"></img>
            <p class="item-title text_black i18n_text">{article.title}</p>
            <p class="item-midtext text_grey i18n_text">{article.desc}</p>
            <p class="item-keyword text_grey i18n_text">{article.keyword}</p>
        </div>
    );
}

export default CatalogueItem;