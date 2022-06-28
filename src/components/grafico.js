import React from "react";
import { Chart } from "react-google-charts";

// dados
export const data = [
  [
    "Dia",
    "Essa semana",
    "Semana passada",
  ],
  [1, 37.8, 80.8],
  [2, 30.9, 69.5],
  [3, 25.4, 57],
  [4, 11.7, 18.8],
  [5, 11.9, 17.6],
  [6, 8.8, 13.6],
  [7, 7.6, 12.3],
  [8, 12.3, 29.2],
  [9, 16.9, 42.9],
  [10, 12.8, 30.9],
  [11, 5.3, 7.9],
  [12, 6.6, 8.4],
  [13, 4.8, 6.3],
  [14, 4.2, 6.2],
];

export const options = {
  chart: {
    
  },
  width:609.45,
  height:334,
  colors: "#280948",
  

};

export function Grafico() {
  return (
    <Chart
      chartType="Line"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}

export default Grafico;


