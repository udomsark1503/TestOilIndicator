import React from "react";
import Header from "../Header";
import MenuDetail from "../Menu";
import Char7 from "../RealTimeCharts7";
const Oil7 = () => {
    return (
        <div className="allbody">
        <Header />
        <div className="Navigation">
            <MenuDetail />
        </div>
        <div className="allIndicator">
        <div className="blog">
            <Char7 />
        </div>
        </div>
    </div>
    )
}
export default Oil7;