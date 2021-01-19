import React from 'react'
import Model from "./Model";
import logo from "./models/TLC.obj";
import material from "./models/TLC.mtl";

const Logo = (props) => {
    return (
        <mesh
            castShadow
            scale={[200, 200, 200]}
            rotation={props.rotation}
            position={props.position}
            color="#F0000F"
        >
            <Model modelPath={logo} materialPath={material} />
        </mesh>
    )
}

export default Logo
