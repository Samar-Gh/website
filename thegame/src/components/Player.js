import React from 'react'

const Player = (props) => {
    return (
        <group position={[0,0.8,0]} ref={props.player}>
            <mesh castShadow>
                <cylinderBufferGeometry args={[0.5, 0.3, 1.6, 20]} />
                <meshStandardMaterial color="#ffff00" />;
            </mesh>
            <mesh position={[0,1.2,0]} castShadow>
                <sphereBufferGeometry args={[0.3, 20, 15]} />
                <meshStandardMaterial color="#ffff00" />;
            </mesh>
        </group>
    )
}

export default Player
