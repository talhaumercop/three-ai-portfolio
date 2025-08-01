import React, { useRef, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

function Scene() {
  const { gl } = useThree();
  
  useEffect(() => {
    // Set the background color of the WebGL renderer
    gl.setClearColor('#8b5cf6', 1); // Purple color
  }, [gl]);

  return null;
}

function KeyboardMesh() {
  const meshRef = useRef();
  const gltf = useLoader(GLTFLoader, '/stylized_keyboard/scene.gltf');
  
  // Floating animation with auto-rotation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2; // Auto-rotation
    }
  });

  useEffect(() => {
    if (gltf.scene) {
      // Traverse and set materials
      gltf.scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          
          // // Enhance materials for better appearance
          // if (child.material) {
          //   child.material.metalness = 0.1;
          //   child.material.roughness = 0.8;
          // }
        }
      });
    }
  }, [gltf]);

  return (
    <primitive 
      ref={meshRef}
      object={gltf.scene} 
      scale={[1, 1, 1]}
      position={[0, -1, 0]}
      rotation={[0.1, 0.3, 0]}
    />
  );
}

export default function KeyboardModel() {
  return (
    <div className="w-full h-full border-8 border-black bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg overflow-hidden">
      <Canvas
        camera={{ 
          position: [5, 3, 5], 
          fov: 50,
          near: 0.1,
          far: 1000
        }}
        shadows
        gl={{ 
          antialias: true,
          alpha: false,
          preserveDrawingBuffer: true
        }}
        style={{ width: '100%', height: '100%' }}
      >
        {/* Set WebGL background color */}
        <Scene />
        
        {/* Lighting */}
        <ambientLight intensity={1.6} />
        {/* <directionalLight 
          position={[10, 10, 5]} 
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-10, -10, -10]} intensity={0.3} />
         */}
        {/* 3D Model */}
        <Suspense fallback={null}>
          <KeyboardMesh />
        </Suspense>
      </Canvas>
    </div>
  );
}