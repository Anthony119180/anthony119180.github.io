//目录中间部分
import React from "react";
import "./catalogue.css"
import "../../components/common/common.css"
import CatalogueItem from "./catalogue-item"
import { Link } from "react-router-dom";
import Articles from "../../assets/article/articles"

const CatalogueMain = ()=>{
    return (
        <div class = "catalogue-main-bg">
            {
                Articles.map(cfg =>(
                    <Link to = {`/page/${cfg.id}`} class = "item-link">
                        <CatalogueItem  id ={cfg.id}></CatalogueItem>
                    </Link>
                ))
            }
        </div>
    );
}

export default CatalogueMain;