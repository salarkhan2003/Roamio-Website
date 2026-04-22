import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

export function Airplane() {
  const meshRef = useRef<THREE.Group>(null);

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={meshRef} rotation={[0, -Math.PI / 2, 0]}>
        {/* Fuselage */}
        <mesh castShadow>
          <capsuleGeometry args={[0.5, 4, 16, 32]} />
          <meshStandardMaterial color="#A8E6CF" roughness={0.3} metalness={0.2} />
        </mesh>
        
        {/* Main Wings */}
        <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
          <boxGeometry args={[5, 0.1, 0.8]} />
          <meshStandardMaterial color="#2D6A4F" roughness={0.4} />
        </mesh>

        {/* Tail Wings */}
        <mesh position={[1.8, 0, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
          <boxGeometry args={[1.5, 0.1, 0.4]} />
          <meshStandardMaterial color="#2D6A4F" roughness={0.4} />
        </mesh>

        {/* Vertical Stabilizer */}
        <mesh position={[1.8, 0.4, 0]} rotation={[0, 0, 0.3]} castShadow>
          <boxGeometry args={[0.8, 0.8, 0.1]} />
          <meshStandardMaterial color="#A8E6CF" roughness={0.4} />
        </mesh>

        {/* Engines */}
        <mesh position={[0.2, -0.4, 1.2]} rotation={[0, Math.PI / 2, 0]} castShadow>
          <cylinderGeometry args={[0.2, 0.2, 0.6, 16]} />
          <meshStandardMaterial color="#0D0D1A" roughness={0.2} />
        </mesh>
        <mesh position={[0.2, -0.4, -1.2]} rotation={[0, Math.PI / 2, 0]} castShadow>
          <cylinderGeometry args={[0.2, 0.2, 0.6, 16]} />
          <meshStandardMaterial color="#0D0D1A" roughness={0.2} />
        </mesh>
      </group>
    </Float>
  );
}

export function Train() {
  return (
    <group>
      <mesh castShadow>
        <boxGeometry args={[6, 0.6, 0.5]} />
        <meshStandardMaterial color="#2D6A4F" roughness={0.2} metalness={0.5} />
      </mesh>
      {/* Windows */}
      {[...Array(8)].map((_, i) => (
        <mesh key={i} position={[-2.5 + i * 0.7, 0.1, 0.26]}>
          <boxGeometry args={[0.4, 0.2, 0.01]} />
          <meshStandardMaterial color="#A8E6CF" emissive="#A8E6CF" emissiveIntensity={0.5} />
        </mesh>
      ))}
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
    </group>
  );
}

export function Bus() {
  return (
    <group>
      <mesh castShadow>
        <boxGeometry args={[4, 1.2, 1]} />
        <meshStandardMaterial color="#A8E6CF" roughness={0.3} />
      </mesh>
      {/* Front Window */}
      <mesh position={[1.9, 0.2, 0]}>
        <boxGeometry args={[0.22, 0.6, 0.9]} />
        <meshStandardMaterial color="#0D0D1A" transparent opacity={0.6} metalness={0.8} />
      </mesh>
      {/* Wheels */}
      <mesh position={[-1.2, -0.6, 0.4]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} />
        <meshStandardMaterial color="#0D0D1A" />
      </mesh>
      <mesh position={[1.2, -0.6, 0.4]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} />
        <meshStandardMaterial color="#0D0D1A" />
      </mesh>
    </group>
  );
}

export function Car() {
  return (
    <group>
      <mesh castShadow>
        <boxGeometry args={[3, 0.8, 1.4]} />
        <meshStandardMaterial color="#A8E6CF" roughness={0.1} metalness={0.8} />
      </mesh>
      {/* Roof */}
      <mesh position={[-0.2, 0.6, 0]}>
        <boxGeometry args={[1.5, 0.6, 1.2]} />
        <meshStandardMaterial color="#0D0D1A" transparent opacity={0.4} />
      </mesh>
      {/* Headlights */}
      <mesh position={[1.45, 0, 0.4]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#fff" emissive="#fff" emissiveIntensity={2} />
      </mesh>
      <mesh position={[1.45, 0, -0.4]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#fff" emissive="#fff" emissiveIntensity={2} />
      </mesh>
    </group>
  );
}

export function PhoneMockup() {
  return (
    <group rotation={[0, -0.3, 0.2]}>
      {/* Frame */}
      <mesh castShadow>
        <boxGeometry args={[2, 4.2, 0.2]} />
        <meshStandardMaterial color="#A8E6CF" roughness={0.1} metalness={0.8} />
      </mesh>
      {/* Screen */}
      <mesh position={[0, 0, 0.11]}>
        <planeGeometry args={[1.8, 4]} />
        <meshStandardMaterial color="#0D0D1A" metalness={0.9} roughness={0} />
      </mesh>
      {/* Camera Bump */}
      <mesh position={[0, 1.6, -0.1]}>
        <boxGeometry args={[0.8, 0.8, 0.1]} />
        <meshStandardMaterial color="#A8E6CF" roughness={0.1} metalness={0.8} />
      </mesh>
    </group>
  );
}
