import React from "react";
import NormalHeader from "../header/normal-header";
import "../../components/common/common.css";
import Articles from "../../assets/article/articles"
import { useParams } from "react-router-dom";
import InfoPanel from "../../components/info-panel/info-panel";
import MainBody from "./main-body";
import { useEffect } from "react";

// 文章内容的页面
const PageTemplatePage = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    })

    const {id} = useParams();
    const val = Articles.find(item=> item.id === parseInt(id));
    if(!val)
    {
        return <div>Article Not Found</div>
    }

    const {article} = val;
    return (
        <div class="page">
            <NormalHeader></NormalHeader>
            <InfoPanel></InfoPanel>
            <MainBody article = {article}></MainBody>
        </div>
    )
};

export default PageTemplatePage;