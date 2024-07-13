import React from "react";
import InfoPanel from "../../components/info-panel/info-panel";
import CatalogueMain from "../../components/catalogue/catalogue-main";

// 目录界面
const Catalogue = () => {
    return (
        <div>
            <InfoPanel></InfoPanel>
            <CatalogueMain></CatalogueMain>
        </div>
    );
}

export default Catalogue;