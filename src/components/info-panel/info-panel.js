import React from "react"
import "./info-panel.css"
import profiler_2 from "../../assets/img/profile_2.png"
import "../common/common.css"
import linkedin from "../../assets/img/linkedin.png"
import youtube from "../../assets/img/youtube.png"
import bilibili from "../../assets/img/bilibili_2.png"

import { useTranslation } from "react-i18next";

const InfoPanel = ()=>{
    const {t} = useTranslation();
    return (
        <div class ="panel-bg translucent-bg">
            <img src = {profiler_2} class = "profile-img"></img>
            <p class = "text_black info-name i18n_text">{t('name')}</p>
            <p class = "text_grey desc-text i18n_text">{t("info_desc")}</p>
            <div class ="icon-area">
                <a href="http://www.linkedin.com/in/anthony119180" target="_blank">
                    <img src= {linkedin} id="linkedin"></img>
                </a>
                <a href="http://www.youtube.com/channel/UCMVudvquzaaNcUxsNQsI8uQ" target="_blank">
                    <img src= {youtube} id="youtube"></img>
                </a>
                <a href="https://b23.tv/mg4rr1q" target="_blank">
                    <img src= {bilibili} id="bilibili"></img>
                </a>
            </div>
        </div>
    );
};

export default InfoPanel;