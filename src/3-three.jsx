import ReactDOM from "react-dom/client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Box(props) {
  const ref = useRef();
  useFrame((state, delta) => (ref.current.rotation.y += delta));
  return (
    <mesh {...props} ref={ref}>
      <boxGeometry args={[props.length, 1, 1]} />
      <meshStandardMaterial color={"pink"} />
    </mesh>
  );
}

function App() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {/* ambient light */}
      <Box length = {5} position={[-1.2, 0, 0]} />
      <Box length = {2} position={[1.2, 0, 0]} />
      <Box length = {4} position={[1.2, 2, 0]} />
    </Canvas>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
