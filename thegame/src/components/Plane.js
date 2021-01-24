import React from 'react'
import { usePlane } from 'use-cannon'

const Plane = (props) => {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
        ...props
    }));
    return (
        <mesh receiveShadow position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} ref={ref} >
            <planeBufferGeometry attach='geometry' args={props.args} />
            <meshStandardMaterial attach='material' color={props.color} />
        </mesh>
    )
}

export default Plane
