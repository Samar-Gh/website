import React from 'react'
import Model from "./Model";
import logo from "./models/TLC.obj";
import material from "./models/TLC.mtl";

const Logo = () => {
    return (
        <mesh
            castShadow
            scale={[200, 200, 200]}
            rotation={[Math.PI / 2 + 0.5, 0, 0]}
            position={[-10, 30, 0]}
            color="#F0000F"
        >
            <Model modelPath={logo} materialPath={material} />
        </mesh>
    )
}

export default Logo
