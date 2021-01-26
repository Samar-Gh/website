import { MeshWobbleMaterial } from 'drei';
import React, { useRef, useState } from 'react';
// import { useSpring } from 'react-spring';
import { useFrame } from 'react-three-fiber';
import { useSpring, a } from 'react-spring/three';

const Cube = ( {position, args, color} ) => {
    const mesh = useRef(null);
    // useFrame(() => (mesh.current.rotation.y = mesh.current.rotation.y += 0.01));

    const [expand, setExpand] = useState(false);

    const props = useSpring({
        scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1]
    });
    return (
        <a.mesh
        onClick={() => setExpand(!expand)}
        scale={props.scale}
        castShadow
        position={position}
        ref={mesh}
        >
            <boxBufferGeometry attach='geometry' args={args}/>
            {/* <meshStandardMaterial attach='material' color={color} /> */}
            <MeshWobbleMaterial 
                attach='material'
                color={color}
                speed={1}
                factor={0.6} />
        </a.mesh>
    );
};

export default Cube;
