import { useContext } from "react";
import clsx from "clsx";
import { ConnectionContext } from "./hooks/ConnectionProvider";

const ConnectButton = () => {
  const { connection, connect, disconnect } = useContext(ConnectionContext);

  return (
    <button
      className={clsx(
        "h-10 w-60 px-6 text-lg  transition-colors duration-150  rounded-lg border border-white ml-[auto] mr-[auto]",
        connection
          ? "bg-red-500 hover:bg-red-800 text-red-100"
          : "bg-indigo-700 hover:bg-indigo-800 text-indigo-100"
      )}
      onClick={connection ? disconnect : connect}
    >
      {connection ? "Disconnect" : "Connect"}
    </button>
  );
};

export default ConnectButton;
