import React from "react";
import './Analytics.css'
import { AreaChart } from "recharts";
import AreaChartfn from "./AreaChartfn";
import BarChartComponent from "./BarChartfn";
import PieChartfn from "./PieChartfn";
import LineChartComponent from "./LineChartfn";
import AreaChartComponent from "./LineChartfn";

const Analytics = () => {
    return (
        <>
            <div className="content-container">
                <AreaChartComponent/>
                <div className="flex-container">
                    <div className="box1">
                        <PieChartfn />

                    </div>
                    <div className="box1">
                        <BarChartComponent />
                    </div>

                </div>
                    
                    

               
            </div>
        </>
    )
}
export default Analytics