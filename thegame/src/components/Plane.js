import React from 'react';
import { Physics, usePlane, useBox } from "use-cannon";

const Plane = ( {args, color} ) => {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
    }));
    return (
        <mesh receiveShadow position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} >
            <planeBufferGeometry attach='geometry' args={args} />
            {/* <shadowMaterial attach='material' opacity={0.3} /> */}
            <meshStandardMaterial attach='material' color={color} />
        </mesh>
    )
}

export default Plane
