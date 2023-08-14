import React from "react";
import MenuDetail from "./Menu";
import Header from "./Header";
import Chart from "./RealTimeCharts1";
import Chart2 from "./RealTimeCharts2";
import Chart3 from "./RealTimeCharts3";
import Chart4 from "./RealTimeCharts4";
import Chart5 from "./RealTimeCharts5";
import Chart6 from "./RealTimeCharts6";
import Chart7 from "./RealTimeCharts7";
import Chart8 from "./RealTimeCharts8";

const Home = () => {
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
        <div className="blog">
            <Chart2 />
        </div>
        <div className="blog">
            <Chart3 />
        </div>
        <div className="blog">
            <Chart4 />
        </div>
        <div className="blog">
            <Chart5 />
        </div>
        <div className="blog">
            <Chart6 />
        </div>
        <div className="blog">
            <Chart7 />
        </div>
        <div className="blog">
            <Chart8 />
        </div>
        </div>
    </div>
    )
}

export default Home;