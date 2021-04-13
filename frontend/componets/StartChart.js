import React from "react";
import { Line } from "react-chartjs-2";


const StartChart = ({data}) => {
  console.log(data.data)
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      <Line
        data={data.data}
        height={"100vh"}
        width={"100wv"}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
};

export default StartChart;
