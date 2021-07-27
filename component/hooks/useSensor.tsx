import { useState, useEffect } from "react";
import socket from "../../utils/socketManager";

export interface ISensor {
  sensorName?: "sensor1" | "sensor2" | "sensor3";
}

const useSensor = () => {
  const [sensor, setSensor] = useState();

  useEffect(() => {
    socket.on("sensors", (payload) => {
      setSensor(payload);
    });
  }, []);

  return sensor;
};

export default useSensor;
