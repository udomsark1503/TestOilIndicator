import React from "react";
import Header from "../Header";
import MenuDetail from "../Menu";
import Chart6 from "../RealTimeCharts6";
const Oil6 = () => {
    return (
        <div className="allbody">
        <Header />
        <div className="Navigation">
            <MenuDetail />
        </div>
        <div className="allIndicator">
        <div className="blog">
            <Chart6 />
        </div>
        </div>
    </div>
    )
}
export default Oil6;