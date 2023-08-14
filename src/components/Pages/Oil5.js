import React from "react";
import Header from "../Header";
import MenuDetail from "../Menu";
import Chart5 from "../RealTimeCharts5";
const Oil5 = () => {
    return (
        <div className="allbody">
        <Header />
        <div className="Navigation">
            <MenuDetail />
        </div>
        <div className="allIndicator">
        <div className="blog">
            <Chart5 />
        </div>
        </div>
    </div>
    )
}
export default Oil5;