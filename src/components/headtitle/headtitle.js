// 主页面 头像+名字+标语
import React from "react";
import "./headtitle.css";
import "../common/common.css";
import head from "../../assets/img/profile.png";

const Headtitle = () => {
    const func = () => {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    };
    return (
        <div>
            <div class="headtitle-area">
                <button class="transparent-btn" onClick={func}>
                    <img class="headtitle-img" src={head}></img>
                </button>
                <p id="name" class="profile-label profile-margin">ANTHONY CHEN</p>
                <p id="title-text" class="profile-label profile-margin">HONESE, CURIOUS, AND FEARLESS</p>
            </div>
        </div>
    );
};

export default Headtitle;