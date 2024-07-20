import React from "react";
import "./header.css";
import "../common/common.css"
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const NormalHeader = () => {
    const navigate = useNavigate()
    // 名字主页点击
    const handleClick  = () => {
        navigate('/');
    };

    // 语言版本
    const {t,i18n} = useTranslation();
    const changeLanguage = ()=>{
        var set = i18n.language === "eng"? "cn" : "eng";
        i18n.changeLanguage(set);
    }

    return (
        <div class= "header-bg">
            <button class="transparent-btn" onClick={handleClick }>
                <p class="header-name text_black">{t("homepage_str")}</p>
            </button>
            <button class="transparent-btn header-language-btn" onClick={changeLanguage}>
                <p class="header-language">
                    <span style = {{color:i18n.language === "eng"?"#333333":"#bbbbbb"}}>{t("en")}</span>
                    <span> | </span>
                    <span style={{color:i18n.language === "eng"?"#bbbbbb":"#333333"}}>{t("cn")}</span>
                </p>
            </button>
        </div>
    );

};

export default NormalHeader;