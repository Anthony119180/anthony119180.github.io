import React from "react";
import { Link } from "react-router-dom";
import Articles from "../../assets/article/articles"

const Guide = ()=>{
    return (
        <div>
            <ul>
                {
                    Articles.map(item =>(
                        <li key = {item.id}>
                            <Link to = {`/page/${item.id}`}></Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );

}

export default Guide;