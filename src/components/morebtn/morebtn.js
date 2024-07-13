import React from "react";

import "../common/common.css";
import "./morebtn.css";
import { useTranslation } from "react-i18next";


const Morebtn = () => {
    const {t} = useTranslation();
    const func = () => {
        var y = window.innerHeight - 70;
        window.scrollTo({ top: y, behavior: 'smooth' });
    };
    return (
        <div>
            <button id="more-btn" class="scroll-to-mid transparent-btn" onClick={func}>
                {t("more_btn")}
            </button>
        </div>
    );
}

export default Morebtn;