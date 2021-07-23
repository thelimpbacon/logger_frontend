import { useEffect } from "react";

import socket from "../../utils/socketManager";

const ConnectionStatus = () => {
  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected");
    });

    socket.on("connect_error", () => {
      console.log("connection failed");
    });
  }, []);

  return null;
};

export default ConnectionStatus;
