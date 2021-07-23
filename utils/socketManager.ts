import io from "socket.io-client";

const socket = io("localhost:8080", {
  transports: ["websocket", "polling"],
});

export default socket;
