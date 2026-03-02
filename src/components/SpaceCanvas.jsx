import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function StarField({ count = 6000 }) {
  const ref = useRef()

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 1.5 + Math.random() * 4
      arr[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [count])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.02
      ref.current.rotation.y = state.clock.elapsedTime * 0.015
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#a8c8ff"
        size={0.005}
        sizeAttenuation
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  )
}

function NebulaParticles({ count = 1500 }) {
  const ref = useRef()

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 8
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8

      // Orange-purple nebula colors
      const t = Math.random()
      col[i * 3]     = 0.3 + t * 0.7   // R
      col[i * 3 + 1] = 0.1 + t * 0.2   // G
      col[i * 3 + 2] = 0.5 + (1 - t) * 0.5  // B
    }
    return { positions: pos, colors: col }
  }, [count])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.008
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        vertexColors={false}
        color="#7c3aed"
        size={0.008}
        sizeAttenuation
        depthWrite={false}
        opacity={0.25}
      />
    </Points>
  )
}

function OrbitingRing() {
  const ref = useRef()
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.3
      ref.current.rotation.z = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <torusGeometry args={[2.8, 0.008, 8, 160]} />
      <meshBasicMaterial color="#f97316" transparent opacity={0.08} />
    </mesh>
  )
}

function PlanetGlobe() {
  const ref = useRef()
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.1
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15
    }
  })

  return (
    <mesh ref={ref} position={[3.5, 1.5, -2]}>
      <sphereGeometry args={[0.6, 32, 32]} />
      <meshStandardMaterial
        color="#1a4a7a"
        emissive="#0a2a4a"
        emissiveIntensity={0.5}
        roughness={0.8}
        metalness={0.2}
      />
    </mesh>
  )
}

function Rocket() {
  const ref = useRef()
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = -3 + (state.clock.elapsedTime * 0.3) % 8
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <group ref={ref} position={[-3, -3, 0]} rotation={[0, 0, -0.2]}>
      <mesh>
        <coneGeometry args={[0.08, 0.35, 8]} />
        <meshStandardMaterial color="#f97316" emissive="#ea580c" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0, -0.3, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.4, 8]} />
        <meshStandardMaterial color="#e2e8f0" />
      </mesh>
      <mesh position={[0, -0.6, 0]}>
        <coneGeometry args={[0.12, 0.25, 8]} rotation={[Math.PI, 0, 0]} />
        <meshStandardMaterial color="#94a3b8" />
      </mesh>
    </group>
  )
}

export default function SpaceCanvas() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 4], fov: 75 }}
        gl={{ alpha: true, antialias: false }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#f97316" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#7c3aed" />
        <StarField />
        <NebulaParticles />
        <OrbitingRing />
        <PlanetGlobe />
        <Rocket />
      </Canvas>
    </div>
  )
}
