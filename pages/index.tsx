import ConnectionStatus from "../component/hooks/ConnectionStatus";
import ReeChart from "../component/ReeChart";

export default function Home() {
  return (
    <>
      <ConnectionStatus />
      <ReeChart />
    </>
  );
}
