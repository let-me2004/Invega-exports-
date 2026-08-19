'use client';
import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { latLonToVector3 } from '@/lib/geoUtils';

interface RouteArcProps {
  startCoords: [number, number];
  endCoords: [number, number];
  radius: number;
  progress: number;
}

export const RouteArc: React.FC<RouteArcProps> = ({ startCoords, endCoords, radius, progress }) => {
  const lineRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  const { curve, geometry } = useMemo(() => {
    const [startX, startY, startZ] = latLonToVector3(startCoords[0], startCoords[1], radius);
    const start = new THREE.Vector3(startX, startY, startZ);
    
    const [endX, endY, endZ] = latLonToVector3(endCoords[0], endCoords[1], radius);
    const end = new THREE.Vector3(endX, endY, endZ);

    const distance = start.distanceTo(end);
    const midPoint = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
    midPoint.normalize().multiplyScalar(radius + distance * 0.3); // elevate curve based on distance

    const curve = new THREE.CatmullRomCurve3([start, midPoint, end]);
    const geometry = new THREE.TubeGeometry(curve, 64, 0.005, 8, false);
    
    return { curve, geometry };
  }, [startCoords, endCoords, radius]);

  useFrame(() => {
    if (lineRef.current) {
      lineRef.current.geometry.setDrawRange(0, Math.floor(progress * geometry.attributes.position.count));
    }
    if (glowRef.current && progress > 0) {
      const pt = curve.getPointAt(Math.min(progress, 1));
      glowRef.current.position.copy(pt);
      glowRef.current.visible = progress < 1;
    }
  });

  return (
    <group>
      <mesh ref={lineRef} geometry={geometry}>
        <meshStandardMaterial 
          color="#D4A853" 
          emissive="#D4A853"
          emissiveIntensity={1}
          transparent={true}
          opacity={0.6}
        />
      </mesh>
      <mesh ref={glowRef} visible={false}>
        <sphereGeometry args={[0.015, 16, 16]} />
        <meshBasicMaterial color="#ffffff" />
        <pointLight distance={0.2} intensity={1} color="#D4A853" />
      </mesh>
    </group>
  );
};
