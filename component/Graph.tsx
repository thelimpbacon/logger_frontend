import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { ISensor } from "./hooks/useSensor";

const options = {
  animation: false,
  maintainAspectRation: false,
  // responsive: false,
  scales: {
    y: {
      ticks: {
        display: false,
      },
      max: 1,
      min: 0,
    },
    x: {
      ticks: {
        display: true,
      },
    },
  },
};

interface ILineChart extends ISensor {
  borderColor?: string;
  update: {
    label: number;
    datum: number;
  };
}

const updater = (list: Array<number>, newData: number): Array<number> => {
  const addedOnList = [...list, newData];
  return addedOnList.length <= 100 ? addedOnList : addedOnList.splice(1);
};

const LineChart = ({ sensorName, borderColor, update }: ILineChart) => {
  const [labels, setLabels] = useState<Array<number>>([...Array(20).fill(0)]);
  const [data, setData] = useState<Array<number>>([...Array(20).fill(0)]);

  useEffect(() => {
    setLabels(updater(labels, update.label));
    setData(updater(data, update.datum));
  }, [update]);

  return (
    <div
      className="chart-container"
      style={
        {
          // position: "relative",
          // height: "500px",
          // width: "40vw",
        }
      }
    >
      <Line
        data={{
          labels,
          datasets: [
            {
              label: sensorName,
              data,
              fill: false,
              backgroundColor: borderColor,
              borderColor: borderColor,
            },
          ],
        }}
        options={options}
      />
    </div>
  );
};

export default LineChart;
