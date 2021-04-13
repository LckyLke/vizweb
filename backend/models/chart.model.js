const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Conten Objekt of a dataset

const chartSchema = new Schema(
  {
    chartType: String,
    data: {
      labels: [Number],
      datasets: [
        {
          label: String,
          data: [Number],
          fill: Boolean,
          borderColor: String,
          tension: Number,
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

const Chart = mongoose.model("Chart", chartSchema);
module.exports = Chart;
