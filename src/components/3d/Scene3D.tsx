import { ReactNode, Suspense, useState, useEffect, useRef, memo } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';

interface SceneProps {
  children: ReactNode;
  className?: string;
  autoRotate?: boolean;
  environment?: string;
}

export const Scene3D = memo(({ children, className, environment }: SceneProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0,
        rootMargin: '200px 0px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={className + " w-full h-full"}>
      {isVisible ? (
        <Canvas
          shadows={false}
          dpr={1}
          camera={{ position: [0, 0, 5], fov: 45 }}
          className="w-full h-full"
          frameloop="always"
          gl={{ 
            antialias: false,
            alpha: true,
            powerPreference: 'high-performance',
            preserveDrawingBuffer: false,
            stencil: false,
            depth: true,
            precision: 'lowp'
          }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Suspense fallback={null}>
            {children}
            {environment && <Environment preset={environment as any} />}
          </Suspense>
        </Canvas>
      ) : (
        <div className="w-full h-full bg-transparent" />
      )}
    </div>
  );
});

Scene3D.displayName = 'Scene3D';
