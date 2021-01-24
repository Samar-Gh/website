import React from 'react'
import Logo from '../../components/Logo'

const TLC = () => {
    return (
        <group>
            {/* <Logo position={[-10, 0, 0]} rotation={[Math.PI / 2, 0, 0]} /> */}
            
            <mesh position={[-4,1,0]} castShadow receiveShadow>
                <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
                <meshLambertMaterial attach="material" color="orange" />
            </mesh>
            <mesh position={[-3,1,0]} castShadow receiveShadow>
                <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
                <meshLambertMaterial attach="material" color="orange" />
            </mesh>
            <mesh position={[-2,1,0]} castShadow receiveShadow>
                <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
                <meshLambertMaterial attach="material" color="orange" />
            </mesh>
            <mesh position={[-3,0,0]} castShadow receiveShadow>
                <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
                <meshLambertMaterial attach="material" color="orange" />
            </mesh>
            <mesh position={[-3,-1,0]} castShadow receiveShadow>
                <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
                <meshLambertMaterial attach="material" color="orange" />
            </mesh>


            <mesh position={[0,1,0]} castShadow receiveShadow>
                <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
                <meshLambertMaterial attach="material" color="orange" />
            </mesh>
            <mesh position={[0,0,0]} castShadow receiveShadow>
                <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
                <meshLambertMaterial attach="material" color="orange" />
            </mesh>
            <mesh position={[0,-1,0]} castShadow receiveShadow>
                <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
                <meshLambertMaterial attach="material" color="orange" />
            </mesh>
            <mesh position={[1,-1,0]} castShadow receiveShadow>
                <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
                <meshLambertMaterial attach="material" color="orange" />
            </mesh>


            <mesh position={[3,1,0]}>
                <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
                <meshLambertMaterial attach="material" color="orange" />
            </mesh>
            <mesh position={[4,1,0]}>
                <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
                <meshLambertMaterial attach="material" color="orange" />
            </mesh>
            <mesh position={[3,0,0]}>
                <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
                <meshLambertMaterial attach="material" color="orange" />
            </mesh>
            <mesh position={[3,-1,0]}>
                <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
                <meshLambertMaterial attach="material" color="orange" />
            </mesh>
            <mesh position={[4,-1,0]}>
                <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
                <meshLambertMaterial attach="material" color="orange" />
            </mesh>
        </group>
    )
}

export default TLC
