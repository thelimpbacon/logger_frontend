import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import socket from "../../utils/socketManager";

interface Props {
  children: ReactNode;
}

interface IContextValue {
  connection: boolean;
  connect: () => void;
  disconnect: () => void;
}

const connectInitialState: IContextValue = {
  connection: false,
  connect: () => undefined,
  disconnect: () => undefined,
};

export const ConnectionContext =
  createContext<IContextValue>(connectInitialState);

const ConnectionProvider = ({ children }: Props) => {
  const [connection, setConnection] = useState<boolean>(false);

  useEffect(() => {
    socket.disconnect();
  }, []);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected");
      setConnection(true);
    });

    socket.on("connect_error", () => {
      console.log("connection failed");
      setConnection(false);
    });

    socket.on("disconnect", () => {
      console.log("disconnected");
      setConnection(false);
    });
  }, []);

  const connect = useCallback(() => {
    socket.connect();
  }, []);

  const disconnect = useCallback(() => {
    socket.disconnect();
  }, []);

  return (
    <ConnectionContext.Provider
      value={{
        connection,
        connect,
        disconnect,
      }}
    >
      {children}
    </ConnectionContext.Provider>
  );
};

export default ConnectionProvider;
