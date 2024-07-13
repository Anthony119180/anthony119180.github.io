import React, { useEffect, useState } from "react";
import "./header.css";
import "../common/common.css"
import { useTranslation } from "react-i18next";

const Header = () => {

    // 名字主页点击
    const name_click = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // 语言版本
    const {t,i18n} = useTranslation();
    const changeLanguage = ()=>{
        var set = i18n.language === "eng"? "cn" : "eng";
        i18n.changeLanguage(set);
    }

    // 渐隐渐显
    const [showHeader,setShowHeader] = useState(false);
    useEffect(()=>{
        const onScroll = ()=>{
            setShowHeader(window.scrollY >= 100);
        };
        window.addEventListener('scroll',onScroll);
        return ()=>{
            window.removeEventListener('scroll',onScroll);
        };
    },[])
    return (
        <div class= {`header-effect ${showHeader? 'visible' : "hidden"} header-bg`}>
            <button class="transparent-btn" onClick={name_click}>
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

export default Header;