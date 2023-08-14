import React from "react";
import Header from "../Header";
import MenuDetail from "../Menu";
import Chart8 from "../RealTimeCharts8";
const Oil8 = () => {
    return (
        <div className="allbody">
        <Header />
        <div className="Navigation">
            <MenuDetail />
        </div>
        <div className="allIndicator">
        <div className="blog">
            <Chart8 />
        </div>
        </div>
    </div>
    )
}
export default Oil8;