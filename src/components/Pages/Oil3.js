import React from "react";
import Header from "../Header";
import MenuDetail from "../Menu";
import Chart3 from "../RealTimeCharts3";
const Oil3 = () => {
    return (
        <div className="allbody">
        <Header />
        <div className="Navigation">
            <MenuDetail />
        </div>
        <div className="allIndicator">
        <div className="blog">
            <Chart3 />
        </div>
        </div>
    </div>
    )
}
export default Oil3;