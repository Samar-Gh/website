import { RoundedBox } from 'drei'
import React from 'react'

const Babybot=(props) => {
    // const [ref, api] = useBox(() => ({ mass: 0.08, position: props.position, rotation: [0, 0, 0] }));
    return(
        <group position={props.position} rotation={props.rotation}>
            <mesh position={[0,3.2,0]} castShadow receiveShadow>
                <sphereBufferGeometry args={[1.6,32,32]}/>
                <meshStandardMaterial color='#C4C4D8'/>
            </mesh>

            <mesh position={[0,2.9,-1.16]}>
                <RoundedBox args={[2,1,1]}radius={0.25} smoothness={8}/>
                <meshStandardMaterial color="#C4C4D8" />
            </mesh>

            <mesh position={[-0.5,2.9, -1.67]} rotation={[0,Math.PI,0]}>
                <circleBufferGeometry args={[0.3,32]}/>
                <meshStandardMaterial color="#000000" />
            </mesh>
            <mesh position={[0.5,2.9, -1.67]} rotation={[0,Math.PI,0]}>
                <circleBufferGeometry args={[0.3,32]}/>
                <meshStandardMaterial color="#000000" />
            </mesh>

            <mesh position={[0,0.4,0]} castShadow >
                <cylinderBufferGeometry attach="geometry" args={[1.4, 1.6, 0.8, 32]}/>
                <meshStandardMaterial attach="material" color="#C4C4D8" /> 
            </mesh>
            <mesh position={[0,1.4,0]} castShadow >
                <cylinderBufferGeometry attach="geometry" args={[0.8, 1.4, 1.2, 32]}/>
                <meshStandardMaterial attach="material" color="#C4C4D8" />
            </mesh>
        </group>
    )
}

export default Babybot
