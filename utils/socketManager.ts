import io from "socket.io-client";

const socket = io("192.168.178.51:8080", {
  transports: ["websocket", "polling"],
  reconnection: false,
});

export default socket;
