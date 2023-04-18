import React from "react";
import { useLocation } from "react-router-dom";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement } from 'chart.js';
import './ReportCard.css'
Chart.register(ArcElement);

const ReportCard = () => {
  let { state } = useLocation();
  console.log(state.state);
  
  const correctPercentage:any = ((state.state / 5) * 100).toFixed(2);
  const incorrectPercentage = ((100 - correctPercentage)).toFixed(2);

  const data = {
    labels: [`Correct (${correctPercentage}%)`, `Incorrect (${incorrectPercentage}%)`],
    datasets: [
      {
        data: [state.state, 5 - state.state],
        backgroundColor: ["#FF6384", "#36A2EB"],
        hoverBackgroundColor: ["#a862ea", "#ffb3ff"],
      },
    ],
  };

  return (
    <div className="report-card-container">
      <h2 className="report-card-header">Your Quiz Result</h2>
       <p>Blue is for correct: {(state.state/5)*100} %</p>
       <p>pink is for incorrect: {((5-state.state)/5)*100} %</p>
      <div className="pie-container">
        <Pie data={data}  />
      </div>
       
    </div>
  );
};

export default ReportCard;
