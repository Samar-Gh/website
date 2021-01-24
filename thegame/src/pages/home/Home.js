import React from 'react'
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from 'drei';
import Start from './Start';

const Home = () => {
    return (
        <Canvas 
            colorManagement
            shadowMap
            camera={{ position: [0, 8, 10], fov: 60 }}
        >
            <ambientLight intensity={0.9} />
            <pointLight position={[0, 0, 20]} intensity={0.5} />
            <Start />
            {/* <OrbitControls /> */}
        </Canvas>
    )
}

export default Home
