import React from "react";
import { Line } from "react-chartjs-2";

const data = {data:{labels:[10,20,30,40,50,60],datasets:[{data:[65,59,80,81,40,55,40],_id:"6075e5c7d8ba1c3a282ab751",label:"Beans",fill:false,borderColor:"rgb(75, 192, 192)",tension:0.1}]},_id:"6075e5c7d8ba1c3a282ab750",chartType:"Line",createdAt:"2021-04-13T18:41:11.203Z",updatedAt:"2021-04-13T18:41:11.203Z",__v:0}
const StartChart = () => {
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
