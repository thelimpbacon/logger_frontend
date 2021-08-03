import useSensor from "./hooks/useSensor";
import Graph from "./Graph";

const SensorGroup = () => {
  const sensorData = useSensor();

  return (
    <div className="grid grid-cols-2 h-[100vh] gap-5 py-5 px-10">
      <div className="border border-gray-500 p-1 rounded-sm">
        <Graph
          sensorName="sensor1"
          borderColor="rgba(255, 99, 133,1)"
          backgroundColor="rgba(255, 99, 133,0.5)"
          update={{ datum: sensorData?.sensor1, label: sensorData?.tick }}
        />
      </div>
      <div className="border border-gray-500 p-1 rounded-sm">
        <Graph
          sensorName="sensor2"
          borderColor="rgba(54, 163, 235,1)"
          backgroundColor="rgba(54, 163, 235,0.5)"
          update={{ datum: sensorData?.sensor2, label: sensorData?.tick }}
        />
      </div>
      <div className="border border-gray-500 p-1 rounded-sm">
        <Graph
          sensorName="sensor3"
          borderColor="rgba(203, 101, 254,1)"
          backgroundColor="rgba(203, 101, 254,0.5)"
          update={{ datum: sensorData?.sensor3, label: sensorData?.tick }}
        />
      </div>

      <div className="border border-gray-500 p-1 rounded-sm">
        <Graph
          sensorName="sensor4"
          borderColor="rgba(101, 194, 234,1)"
          backgroundColor="rgba(101, 194, 234,0.5)"
          update={{ datum: sensorData?.sensor4, label: sensorData?.tick }}
        />
      </div>
      <div className="border border-gray-500 p-1 rounded-sm">
        <Graph
          sensorName="sensor5"
          borderColor="rgba(171, 194, 234,1)"
          backgroundColor="rgba(171, 194, 234,0.5)"
          update={{ datum: sensorData?.sensor5, label: sensorData?.tick }}
        />
      </div>
      <div className="border border-gray-500 p-1 rounded-sm">
        <Graph
          sensorName="sensor6"
          borderColor="rgba(252, 235, 3,1)"
          backgroundColor="rgba(252, 235, 3,0.5)"
          update={{ datum: sensorData?.sensor6, label: sensorData?.tick }}
        />
      </div>
      <div className="border border-gray-500 p-1 rounded-sm">
        <Graph
          sensorName="sensor7"
          borderColor="rgba(3, 252, 94,1)"
          backgroundColor="rgba(3, 252, 94,0.5)"
          update={{ datum: sensorData?.sensor7, label: sensorData?.tick }}
        />
      </div>
      <div className="border border-gray-500 p-1 rounded-sm">
        <Graph
          sensorName="sensor8"
          borderColor="rgba(207, 245, 254,1)"
          backgroundColor="rgba(207, 245, 254,0.5)"
          update={{ datum: sensorData?.sensor8, label: sensorData?.tick }}
        />
      </div>
    </div>
  );
};

export default SensorGroup;
