import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { ISensor } from "./hooks/useSensor";

const options = {
  animation: false,
  maintainAspectRation: false,
  // responsive: false,
  plugins: {
    legend: {
      labels: {
        color: "white",
        boxHeight: 5,
        boxWidth: 5,
        font: {
          size: 20,
        },
      },
    },
  },
  elements: {
    point: {
      pointStyle: "line",
    },
  },
  scales: {
    y: {
      ticks: {
        display: false,
      },
      max: 1.2,
      min: 0,
    },
    x: {
      ticks: {
        display: false,
      },
      grid: {
        color: "transparent",
      },
    },
  },
};

interface ILineChart extends ISensor {
  borderColor?: string;
  backgroundColor?: string;
  update: {
    label: number;
    datum: number;
  };
}

const updater = (list: Array<number>, newData: number): Array<number> => {
  const addedOnList = [...list, newData];
  return addedOnList.length <= 150 ? addedOnList : addedOnList.splice(1);
};

const LineChart = ({
  sensorName,
  borderColor,
  backgroundColor,
  update,
}: ILineChart) => {
  const [labels, setLabels] = useState<Array<number>>([...Array(100).fill(0)]);
  const [data, setData] = useState<Array<number>>([...Array(100).fill(0)]);

  useEffect(() => {
    setLabels(updater(labels, update.label));
    setData(updater(data, update.datum));
  }, [update]);

  return (
    <Line
      height={70}
      data={{
        labels,
        datasets: [
          {
            label: sensorName,
            data,
            fill: true,
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            borderWidth: 2,
          },
        ],
      }}
      options={options}
    />
  );
};

export default LineChart;
