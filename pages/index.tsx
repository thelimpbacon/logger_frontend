import ConnectionStatus from "../component/hooks/ConnectionStatus";
import SensorGroup from "../component/SensorGroup";

export default function Home() {
  return (
    <>
      <ConnectionStatus />
      <SensorGroup />
    </>
  );
}
