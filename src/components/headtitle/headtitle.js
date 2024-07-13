// 主页面 头像+名字+标语
import React from "react";
import "./headtitle.css";
import "../common/common.css";
import head from "../../assets/img/profile.png";
import { useTranslation } from "react-i18next";

const Headtitle = () => {
    const func = () => {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    };
    const {t} = useTranslation();
    return (
        <div>
            <div class="headtitle-area">
                <button class="transparent-btn" onClick={func}>
                    <img class="headtitle-img" src={head}></img>
                </button>
                <p id="name" class="profile-label profile-margin">{t('name')}</p>
                <p id="title-text" class="profile-label profile-margin i18n_text">{t("desc")}</p>
            </div>
        </div>
    );
};

export default Headtitle;