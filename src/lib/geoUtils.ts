export function latLonToVector3(lat: number, lon: number, radius: number): [number, number, number] {
  const phi = (lat * Math.PI) / 180;
  const theta = (lon * Math.PI) / 180;

  const x = -radius * Math.cos(phi) * Math.sin(theta);
  const y = radius * Math.sin(phi);
  const z = radius * Math.cos(phi) * Math.cos(theta);

  return [x, y, z];
}

export function greatCirclePoints(
  start: [number, number],
  end: [number, number],
  radius: number,
  segments: number = 20
): Array<[number, number, number]> {
  const startVec = latLonToVector3(start[0], start[1], radius);
  const endVec = latLonToVector3(end[0], end[1], radius);
  
  // Convert to Cartesian 3D vectors
  const p1 = { x: startVec[0], y: startVec[1], z: startVec[2] };
  const p2 = { x: endVec[0], y: endVec[1], z: endVec[2] };
  
  // Normalized vectors
  const p1Norm = Math.sqrt(p1.x*p1.x + p1.y*p1.y + p1.z*p1.z);
  const n1 = { x: p1.x/p1Norm, y: p1.y/p1Norm, z: p1.z/p1Norm };
  
  const p2Norm = Math.sqrt(p2.x*p2.x + p2.y*p2.y + p2.z*p2.z);
  const n2 = { x: p2.x/p2Norm, y: p2.y/p2Norm, z: p2.z/p2Norm };
  
  // Dot product
  const dot = n1.x*n2.x + n1.y*n2.y + n1.z*n2.z;
  const omega = Math.acos(Math.max(-1, Math.min(1, dot)));
  
  const points: Array<[number, number, number]> = [];
  
  for (let i = 0; i <= segments; i++) {
    const f = i / segments;
    
    // Slerp
    const sinOmega = Math.sin(omega);
    let interpolated: {x: number, y: number, z: number};
    
    if (Math.abs(sinOmega) < 0.0001) {
      // Linear fallback for very close points
      interpolated = {
        x: n1.x + f * (n2.x - n1.x),
        y: n1.y + f * (n2.y - n1.y),
        z: n1.z + f * (n2.z - n1.z)
      };
    } else {
      const a = Math.sin((1 - f) * omega) / sinOmega;
      const b = Math.sin(f * omega) / sinOmega;
      
      interpolated = {
        x: n1.x * a + n2.x * b,
        y: n1.y * a + n2.y * b,
        z: n1.z * a + n2.z * b
      };
    }
    
    // Add elevation (max 1.3x radius at midpoint)
    const elevation = radius + (radius * 0.3 * Math.sin(f * Math.PI));
    
    // Normalize and scale by elevation
    const len = Math.sqrt(interpolated.x*interpolated.x + interpolated.y*interpolated.y + interpolated.z*interpolated.z);
    points.push([
      (interpolated.x / len) * elevation,
      (interpolated.y / len) * elevation,
      (interpolated.z / len) * elevation
    ]);
  }
  
  return points;
}
