import React from 'react'
import { useBox } from 'use-cannon'

const Barrel = (props) => {
    const [ref, api] = useBox(() => ({ mass: 1, position: props.position, rotation: [Math.PI / 2, 0, 0] }));
    return (
        <mesh
            onClick={() => {
                api.velocity.set(0, 2, 0);
            }}
            ref={ref}
            position={props.position}
            castShadow
            receiveShadow
        >
            <cylinderBufferGeometry attach="geometry" args={[0.5, 0.5, 1, 16]} />
            <meshPhongMaterial
                attach="material"
                color="#d0901d"
                emissive="#aa0000"
                side="DoubleSide"
                flatShading="true"
            />
        </mesh>
    );
}

export default Barrel
