import React from "react";
import Header from "../Header";
import MenuDetail from "../Menu";
import Chart4 from "../RealTimeCharts4";
const Oil4 = () => {
    return (
        <div className="allbody">
        <Header />
        <div className="Navigation">
            <MenuDetail />
        </div>
        <div className="allIndicator">
        <div className="blog">
            <Chart4 />
        </div>
        </div>
    </div>
    )
}
export default Oil4;