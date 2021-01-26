import React from 'react'
import { useSphere } from 'use-cannon';

const BowlingBall = (props) => {
    const [ref, api] = useSphere(() => ({ mass: 2, position: [10, 1, 0], rotation: [0, 0, 0] }));

    return (
        <React.Fragment>
            <mesh
                ref={ref}
                position={props.position}
                castShadow receiveShadow
                onClick={() => {
                    api.velocity.set(35, 0, 0);
                }}
            >
                <sphereBufferGeometry attach="geometry" args={[1, 32, 32]}/>
                <meshStandardMaterial attach="material" color="#333333" />
            </mesh>
        </React.Fragment>
    )
}

export default BowlingBall
