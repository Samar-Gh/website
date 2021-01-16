import React from 'react';

const Plane = ( {args, color} ) => {
    return (
        <mesh receiveShadow position={[0, -3, 0]} rotation={[-Math.PI / 2, 0, 0]} >
            <planeBufferGeometry attach='geometry' args={args} />
            <shadowMaterial attach='material' opacity={0.3} />
            {/* <meshStandardMaterial attach='material' color={color} /> */}
        </mesh>
    )
}

export default Plane
