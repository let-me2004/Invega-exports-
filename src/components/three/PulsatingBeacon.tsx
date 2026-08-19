'use client';
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { latLonToVector3 } from '@/lib/geoUtils';

interface PulsatingBeaconProps {
  lat: number;
  lon: number;
  radius: number;
}

export const PulsatingBeacon: React.FC<PulsatingBeaconProps> = ({ lat, lon, radius }) => {
  const ringRef = useRef<THREE.Mesh>(null);
  const position = useMemo(() => {
    const [x, y, z] = latLonToVector3(lat, lon, radius);
    return new THREE.Vector3(x, y, z);
  }, [lat, lon, radius]);

  const ringMaterial = useMemo(() => {
    return new THREE.MeshBasicMaterial({
      color: '#D4A853',
      transparent: true,
      opacity: 0.8,
      side: THREE.DoubleSide,
    });
  }, []);

  useFrame(({ clock }) => {
    if (ringRef.current) {
      const t = clock.getElapsedTime();
      const scale = 1.0 + (Math.sin(t * 3) * 0.5 + 0.5); 
      ringRef.current.scale.set(scale, scale, scale);
      (ringRef.current.material as THREE.MeshBasicMaterial).opacity = 1.0 - (scale - 1.0);
    }
  });

  return (
    <group position={position}>
      {/* Core sphere */}
      <mesh>
        <sphereGeometry args={[0.015, 16, 16]} />
        <meshBasicMaterial color="#D4A853" />
      </mesh>
      
      {/* Pulsating ring */}
      <mesh ref={ringRef}>
        <ringGeometry args={[0.015, 0.025, 32]} />
        <primitive object={ringMaterial} attach="material" />
      </mesh>
      
      {/* Glow light */}
      <pointLight distance={0.2} intensity={2} color="#D4A853" />
    </group>
  );
};
