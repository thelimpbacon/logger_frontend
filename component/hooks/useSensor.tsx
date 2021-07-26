import React, { useState, useEffect } from "react";
import socket from "../../utils/socketManager";

interface Props {
  sensorName: "sensor1" | "sensor2" | "sensor3";
}

const useSensor = ({ sensorName }: Props) => {
  const [sensor, setSensor] = useState(0);

  useEffect(() => {
    socket.on(sensorName, (payload) => {
      setSensor(payload);
    });
  }, []);

  return sensor;
};

export default useSensor;
