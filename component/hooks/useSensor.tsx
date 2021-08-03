import { useState, useEffect } from "react";
import socket from "../../utils/socketManager";

export interface ISensor {
  sensorName?: "sensor1" | "sensor2" | "sensor3";
}

interface ISensorData {
  sensor1: number;
  sensor2: number;
  sensor3: number;
  tick: number;
}

const useSensor = () => {
  const [sensor, setSensor] = useState<ISensorData>();

  useEffect(() => {
    socket.on("sensors", (payload) => {
      setSensor(payload);
    });
  }, []);

  return sensor;
};

export default useSensor;
