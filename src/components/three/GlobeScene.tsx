'use client';
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { TextureLoader, Mesh, BackSide } from 'three';
import { PulsatingBeacon } from './PulsatingBeacon';

const EarthSphere = ({ userLat, userLon, scrollProgress }: { userLat?: number, userLon?: number, scrollProgress: number }) => {
  const earthRef = useRef<Mesh>(null);
  
  // Load the NASA earth texture
  const colorMap = useLoader(TextureLoader, '/earth.jpg');

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.0005; // Very slow majestic rotation
      
      // Target rotation based on IP (Mumbai fallback: 19.076, 72.8777)
      const targetLat = (userLat || 19.076) * (Math.PI / 180);
      const targetLon = (userLon || 72.8777) * (Math.PI / 180);
      
      // Smoothly interpolate rotation to target location
      earthRef.current.rotation.x = earthRef.current.rotation.x + (targetLat - earthRef.current.rotation.x) * 0.05;
      
      // Zoom into the surface as the user scrolls (creates the dive effect)
      // Only zoom intensely after 5% scroll so they can see the globe briefly
      if (scrollProgress > 0.05) {
        const diveProgress = (scrollProgress - 0.05) / 0.15; // 0 to 1 over the dive duration
        const targetScale = 1 + (diveProgress * 8); // Scale up 8x to dive into the surface
        earthRef.current.scale.setScalar(earthRef.current.scale.x + (targetScale - earthRef.current.scale.x) * 0.05);
      } else {
        earthRef.current.scale.setScalar(1);
      }
    }
  });

  return (
    <group>
      <mesh ref={earthRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial 
          map={colorMap} 
          roughness={0.8}
          metalness={0.1}
        />
        {userLat && userLon && (
          <PulsatingBeacon lat={userLat} lon={userLon} radius={1} />
        )}
      </mesh>
      
      {/* Subtle atmospheric glow */}
      <mesh>
        <sphereGeometry args={[1.02, 64, 64]} />
        <meshBasicMaterial 
          color="#8CBED6" 
          transparent={true} 
          opacity={0.15} 
          side={BackSide}
          blending={2} // Additive blending
        />
      </mesh>
    </group>
  );
};

interface GlobeSceneProps {
  userLat?: number;
  userLon?: number;
  scrollProgress: number;
}

export const GlobeScene: React.FC<GlobeSceneProps> = ({ userLat, userLon, scrollProgress }) => {
  // Only render Globe for first 30% of scroll
  if (scrollProgress > 0.3) return null;

  return (
    <div className="fixed inset-0 z-0 bg-black">
      <Canvas 
        camera={{ position: [0, 0, 1.4], fov: 45 }} // Moved camera much closer to fill window
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 3, 5]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-5, -3, -5]} intensity={0.2} color="#8CBED6" />
        <EarthSphere userLat={userLat} userLon={userLon} scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  );
};
