import React from "react";
import Header from "../Header";
import MenuDetail from "../Menu";
import Chart from "../RealTimeCharts1";
const Oil1 = () => {
    return (
        <div className="allbody">
        <Header />
        <div className="Navigation">
            <MenuDetail />
        </div>
        <div className="allIndicator">
        <div className="blog">
            <Chart />
        </div>
        </div>
    </div>
    )
}
export default Oil1;