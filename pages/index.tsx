import ConnectionStatus from "../component/hooks/ConnectionStatus";
import SensorGroup from "../component/SensorGroup";

export default function Home() {
  return (
    <div className="bg-gray-800">
      <ConnectionStatus />
      <SensorGroup />
    </div>
  );
}
