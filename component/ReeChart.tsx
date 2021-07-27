import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import useSensor from "./hooks/useSensor";
import {
  LineChart,
  CartesianGrid,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";

const initial = new Array(10).fill({ sensor1: 0, sensor2: 0, sensor3: 0 });

const ReeChart = () => {
  const sensorData = useSensor() as any;
  const [chartData, setChartData] = useState(
    new Array(200).fill({ sensor1: 0, sensor2: 0, sensor3: 0 })
  );

  useEffect(() => {
    if (sensorData) {
      setChartData((prevState) =>
        [
          ...prevState,
          {
            sensor1: sensorData.sensor_data.sensor1,
            sensor2: sensorData.sensor_data.sensor2,
            sensor3: sensorData.sensor_data.sensor3,
          },
        ].slice(1)
      );
    }
  }, [sensorData]);
  //   console.log(chartData);

  return (
    <div>
      <LineChart
        width={1280}
        height={500}
        data={chartData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}

        <YAxis ticks={[1, 2]} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="sensor1"
          stroke="#8884d8"
          isAnimationActive={false}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="sensor2"
          stroke="#82ca9d"
          isAnimationActive={false}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="sensor3"
          stroke="red"
          isAnimationActive={false}
          dot={false}
        />
      </LineChart>
      {JSON.stringify(sensorData?.sensor_data)}
    </div>
  );
};

export default ReeChart;
