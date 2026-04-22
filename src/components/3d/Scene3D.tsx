import { ReactNode, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows } from '@react-three/drei';

interface SceneProps {
  children: ReactNode;
  className?: string;
}

export function Scene3D({ children, className }: SceneProps) {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 5], fov: 45 }}
      className={className}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={1} />
      <Suspense fallback={null}>
        {children}
        <Environment preset="city" />
      </Suspense>
      <ContactShadows resolution={1024} scale={10} blur={2} opacity={0.25} far={10} color="#000000" />
    </Canvas>
  );
}
