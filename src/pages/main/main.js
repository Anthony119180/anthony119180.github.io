import React from "react";
import Header from "../../components/header/header";
import Headtitle from '../../components/headtitle/headtitle';
import Morebtn from "../../components/morebtn/morebtn";
import "../../components/common/common.css";

const main = () => {
    return (
        <div class="page">
            <Header></Header>
            <Headtitle></Headtitle>
            <Headtitle></Headtitle>
            <Morebtn></Morebtn>
        </div>
    )
};

export default main;