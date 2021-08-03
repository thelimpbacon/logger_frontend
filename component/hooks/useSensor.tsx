import { useState, useEffect } from "react";
import socket from "../../utils/socketManager";

export interface ISensor {
  sensorName?:
    | "sensor1"
    | "sensor2"
    | "sensor3"
    | "sensor4"
    | "sensor5"
    | "sensor6"
    | "sensor7"
    | "sensor8";
}

interface ISensorData {
  sensor1: number;
  sensor2: number;
  sensor3: number;
  sensor4: number;
  sensor5: number;
  sensor6: number;
  sensor7: number;
  sensor8: number;
  tick: number;
}

const useSensor = () => {
  const [sensor, setSensor] = useState<ISensorData>();

  useEffect(() => {
    socket.on("sensors", (payload) => {
      setSensor(payload);
      // console.log(payload);
    });
  }, []);

  return sensor;
};

export default useSensor;
