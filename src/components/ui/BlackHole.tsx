import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Float, PerspectiveCamera, Environment } from "@react-three/drei";
import * as THREE from "three";
import blackHoleModel from "../../assets/blackhole.glb?url";

const Model = () => {
    const { scene } = useGLTF(blackHoleModel);
    const modelRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (modelRef.current) {
            // Slower constant rotation
            modelRef.current.rotation.y += 0.002;

            // Base tilt to face user + even slower/smoother mouse follow
            const baseTilt = 1.2;
            const targetX = baseTilt + (state.mouse.y * Math.PI) / 30;
            const targetZ = (state.mouse.x * Math.PI) / 30;

            modelRef.current.rotation.x = THREE.MathUtils.lerp(modelRef.current.rotation.x, targetX, 0.05);
            modelRef.current.rotation.z = THREE.MathUtils.lerp(modelRef.current.rotation.z, targetZ, 0.05);
        }
    });

    return (
        <primitive
            ref={modelRef}
            object={scene}
            scale={0.55}
            position={[0, 0, 0]}
        />
    );
};

export const BlackHole = () => {
    return (
        <div className="w-full h-full grayscale-[1] contrast-[1.2] brightness-[1.1]">
            <Canvas dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={45} />
                <ambientLight intensity={4} />
                <pointLight position={[10, 10, 10]} intensity={6} />
                <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={6} />
                <directionalLight position={[0, 5, 5]} intensity={4} />

                <Suspense fallback={null}>
                    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.2}>
                        <Model />
                    </Float>
                    <Environment preset="night" />
                </Suspense>
            </Canvas>
        </div>
    );
};
