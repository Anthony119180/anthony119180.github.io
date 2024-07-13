//目录中间部分
import React from "react";
import "./catalogue.css"
import "../../components/common/common.css"
import CatalogueItem from "./catalogue-item"

const CatalogueMain = ()=>{
    return (
        <div class = "catalogue-main-bg">
            <CatalogueItem></CatalogueItem>
            <CatalogueItem></CatalogueItem>
            <CatalogueItem></CatalogueItem>
            <CatalogueItem></CatalogueItem>
            <CatalogueItem></CatalogueItem>
        </div>
    );
}

export default CatalogueMain;