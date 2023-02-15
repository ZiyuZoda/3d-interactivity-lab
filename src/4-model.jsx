import ReactDOM from "react-dom/client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { Suspense } from "react";
import { CameraControls, Environment } from "@react-three/drei";

function Scene() {
  const obj = useLoader(OBJLoader, "/chair.obj");
  const leather = obj.getObjectByName("Leather");
  const steel = obj.getObjectByName("Steel");

  return (
    <Suspense fallback={null}>
      <group scale={10} rotation-y={Math.PI}>

        <primitive object={leather}>
          <meshStandardMaterial color={"pink"} />
        </primitive>

        <primitive object={steel}>
          <meshStandardMaterial color={"vanilla"} metalness={0.8} roughness={0.5} />
        </primitive>

      </group>
    </Suspense>
  );
}

function App() {
  return (
    <Canvas>
      <CameraControls makeDefault />
      <Scene />
      <Environment background="true" preset="apartment" />
    </Canvas>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);