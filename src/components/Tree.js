import React from 'react'
import { FlatShading } from 'three'

const Tree = (props) => {
    return (
        <group scale={[2, 2, 2]} position={props.position}>
            <mesh 
                position={[0, 2.5, 0]}
                rotation={[0, 2, 0]}
            >
                <coneBufferGeometry args={[ 0.6, 1, props.sides, props.tiers ]} />
                <meshStandardMaterial color="#00AA00" shading={FlatShading}/>
            </mesh>
            <mesh
                position={[0, 2, 0]}
                rotation={[0, 1.5, 0]}
            >
                <coneBufferGeometry args={[ 0.9, 1.2, props.sides, props.tiers ]}/>
                <meshStandardMaterial color="#009900" shading={FlatShading}/>
            </mesh>
            <mesh
                castShadow
                position={[0, 1.5, 0]}
                rotation={[0, 1, 0]}
            >
                <coneBufferGeometry args={[ 1.2, 1.5, props.sides, props.tiers ]}/>
                <meshStandardMaterial color="#008800" shading={FlatShading}/>
            </mesh>
            <mesh
                position={[0, 0.25, 0]}
            >
                <cylinderBufferGeometry args={[ 0.1, 0.2, 1]} />
                <meshStandardMaterial color="#886633" shading={FlatShading} />
            </mesh>
        </group>
    )
}

export default Tree
