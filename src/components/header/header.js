import React, { useEffect, useState } from "react";
import "./header.css";
import "../common/common.css"

const Header = () => {
    // 名字主页点击
    const name_click = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // 语言版本
    const [isEng, setEng] = useState(true);
    const language_click = () => {
        setEng(!isEng);
    };

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
                <p class="header-name text_black">ANTHONY</p>
            </button>
            <button class="transparent-btn header-language-btn" onClick={language_click}>
                <p class="header-language">
                    <span style = {{color:isEng?"#333333":"#bbbbbb"}}>EN</span>
                    <span> | </span>
                    <span style={{color:isEng?"#bbbbbb":"#333333"}}>CN</span>
                </p>
            </button>
        </div>
    );

};

export default Header;