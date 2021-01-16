import React from "react";
import Model from "./Model";
import slope from "./models/slope.obj";
import material from "./models/slope.mtl";

const Slope = () => {
    return (
        <mesh
            castShadow
            scale={[10.05, 10.05, 10.05]}
            rotation={[0, 20, 0]}
        >
            <Model modelPath={slope} materialPath={material} />
        </mesh>
    )
}

export default Slope
