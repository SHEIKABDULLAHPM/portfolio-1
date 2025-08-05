"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial, Float, Sphere, Box, Octahedron } from "@react-three/drei"
import * as THREE from "three"

function Particles() {
  const ref = useRef<THREE.Points>(null)
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(5000 * 3)
    for (let i = 0; i < 5000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return positions
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.1
    }
  })

  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8b5cf6"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  )
}

function FloatingGeometry() {
  return (
    <>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={0.5}>
        <Sphere args={[0.8, 32, 32]} position={[-4, 2, -2]}>
          <meshStandardMaterial
            color="#8b5cf6"
            transparent
            opacity={0.6}
            wireframe
          />
        </Sphere>
      </Float>
      
      <Float speed={2} rotationIntensity={1.5} floatIntensity={0.8}>
        <Box args={[1.2, 1.2, 1.2]} position={[4, -1, -3]}>
          <meshStandardMaterial
            color="#06b6d4"
            transparent
            opacity={0.4}
            wireframe
          />
        </Box>
      </Float>
      
      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={0.6}>
        <Octahedron args={[1]} position={[2, 3, -4]}>
          <meshStandardMaterial
            color="#ec4899"
            transparent
            opacity={0.5}
            wireframe
          />
        </Octahedron>
      </Float>
      
      <Float speed={1.2} rotationIntensity={1.2} floatIntensity={0.4}>
        <Sphere args={[0.6, 16, 16]} position={[-3, -2, -1]}>
          <meshStandardMaterial
            color="#f59e0b"
            transparent
            opacity={0.7}
            wireframe
          />
        </Sphere>
      </Float>
    </>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <pointLight position={[-10, -10, -10]} intensity={0.4} color="#8b5cf6" />
      <Particles />
      <FloatingGeometry />
    </>
  )
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}