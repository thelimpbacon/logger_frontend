import ConnectButton from "../component/ConnectButton";
import ConnectionProvider from "../component/hooks/ConnectionProvider";
import SensorGroup from "../component/SensorGroup";

export default function Home() {
  return (
    <ConnectionProvider>
      <div className="flex flex-col bg-gray-800 ">
        <ConnectButton />
        <SensorGroup />
      </div>
    </ConnectionProvider>
  );
}
