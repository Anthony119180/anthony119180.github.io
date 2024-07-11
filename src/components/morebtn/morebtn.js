import React from "react";

import "../common/common.css";
import "./morebtn.css";

const Morebtn = () => {
    const func = () => {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    };
    return (
        <div>
            <button id="more-btn" class="scroll-to-mid transparent-btn" onClick={func}>
                MORE ABOUT ME
            </button>
        </div>
    );
}

export default Morebtn;