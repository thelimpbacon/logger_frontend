import useSensor from "./hooks/useSensor";
import Graph from "./Graph";

const SensorGroup = () => {
  const sensorData = useSensor();

  return (
    <div
      style={{
        display: "grid",
        flexDirection: "column",
        gap: "10px",
        justifyContent: "center",
      }}
    >
      <div>
        <Graph
          sensorName="sensor1"
          borderColor="#ff6384"
          update={{ datum: sensorData?.sensor1, label: sensorData?.tick }}
        />
      </div>

      <div>
        <Graph
          sensorName="sensor2"
          borderColor="#36a2eb"
          update={{ datum: sensorData?.sensor2, label: sensorData?.tick }}
        />
      </div>
      <div>
        <Graph
          sensorName="sensor3"
          borderColor="#cc65fe"
          update={{ datum: sensorData?.sensor3, label: sensorData?.tick }}
        />
      </div>
    </div>
  );
};

export default SensorGroup;
