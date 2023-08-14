import React from "react";
import Header from "../Header";
import MenuDetail from "../Menu";
import Chart2 from "../RealTimeCharts2";
const Oil2 = () => {
    return (
        <div className="allbody">
        <Header />
        <div className="Navigation">
            <MenuDetail />
        </div>
        <div className="allIndicator">
        <div className="blog">
            <Chart2 />
        </div>
        </div>
    </div>
    )
}
export default Oil2;