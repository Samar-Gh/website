import React from 'react'
import { useBox } from 'use-cannon';

const BowlingPin = (props) => {
    const [ref, api] = useBox(() => ({ mass: 0.1, position: props.position, rotation: [0, 0, 0] }));
    return (
        <group position={props.position} ref={ref}>
            <mesh position={[0, 0.4, 0]} castShadow receiveShadow>
                <cylinderBufferGeometry attach="geometry" args={[0.6, 0.4, 0.8, 32]}/>
                <meshPhongMaterial 
                attach="material"
                color="#dddddd"
                emissive="#993333"
                // side="DoubleSide"
                // flatShading="true"
            /> 
            </mesh>
            <mesh position={[0, 1.2, 0]} castShadow receiveShadow>
                <cylinderBufferGeometry attach="geometry" args={[0.6, 0.6, 0.8, 32]}/>
                <meshStandardMaterial attach="material" color="#eeeeee" /> 
            </mesh>
            <mesh position={[0, 2, 0]} castShadow receiveShadow>
                <cylinderBufferGeometry attach="geometry" args={[0.28, 0.6, 0.8, 32]}/>
                <meshStandardMaterial attach="material" color="#ffffff" /> 
            </mesh>

            <mesh position={[0, 2.5, 0]} castShadow receiveShadow>
                <cylinderBufferGeometry attach="geometry" args={[0.25, 0.28, 0.2, 32]}/>
                <meshStandardMaterial attach="material" color="#aa3333" /> 
            </mesh>
            <mesh position={[0, 2.7, 0]} castShadow receiveShadow>
                <cylinderBufferGeometry attach="geometry" args={[0.25, 0.25, 0.2, 32]}/>
                <meshStandardMaterial attach="material" color="#ffffff" /> 
            </mesh>
            <mesh position={[0, 2.9, 0]} castShadow receiveShadow>
                <cylinderBufferGeometry attach="geometry" args={[0.27, 0.25, 0.2, 32]}/>
                <meshStandardMaterial attach="material" color="#aa3333" /> 
            </mesh>

            <mesh position={[0, 3.1, 0]} castShadow receiveShadow>
                <cylinderBufferGeometry attach="geometry" args={[0.31, 0.27, 0.2, 32]}/>
                <meshStandardMaterial attach="material" color="#ffffff" /> 
            </mesh>
            <mesh position={[0, 3.4, 0]} castShadow receiveShadow>
                <cylinderBufferGeometry attach="geometry" args={[0.35, 0.31, 0.4, 32]}/>
                <meshStandardMaterial attach="material" color="#ffffff" /> 
            </mesh>

            <mesh position={[0, 3.6, 0]} castShadow receiveShadow>
                <sphereBufferGeometry attach="geometry" args={[0.35, 32, 32]}/>
                <meshStandardMaterial attach="material" color="#ffffff" /> 
            </mesh>
        </group>
    )
}

export default BowlingPin
