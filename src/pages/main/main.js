import React, { useEffect } from "react";
import Header from "../../components/header/header"
import Headtitle from '../../components/headtitle/headtitle';
import Morebtn from "../../components/morebtn/morebtn";
import Catalogue from "../catalogue/catalogue";
import "../../components/common/common.css";

const Main = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <div>
            <div class="page">
                <Header></Header>
                <Headtitle></Headtitle>
                <Morebtn></Morebtn>
            </div>
            <div class="page">
                <Catalogue></Catalogue>
            </div>
        </div>
    )
};

export default Main;