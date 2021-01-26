import React from 'react';
import { Canvas } from 'react-three-fiber';
import { softShadows, OrbitControls } from 'drei';
import Level1 from './levels/Level1';
import TextArea from './TextArea';

// softShadows();

const TheGame = () => {
    return (
        <Canvas 
            colorManagement
            shadowMap
            camera={{ position: [0, 8, 10], fov: 60 }}
        >
            <ambientLight intensity={0.9} />
            <pointLight position={[0, 0, 20]} intensity={0.5} />
            <directionalLight
                castShadow
                position={[-10, 10, -10]} 
                intensity={0.5} 
                shadow-mapSize-width={512}
                shadow-mapSize-height={512}
                shadow-camera-far={100}
                shadow-camera-left={-100}
                shadow-camera-right={100}
                shadow-camera-top={100}
                shadow-camera-bottom={-100}
            />
            <Level1/>
            <OrbitControls />
            <TextArea />
        </Canvas>
    )
}

export default TheGame
