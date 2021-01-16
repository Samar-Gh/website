import React from "react";
import Model from "./Model";
import sledge from "./models/sledge.obj";
import material from "./models/sledge.mtl";

const Sledge = () => {
    return (
        <mesh
            castShadow
            scale={[10.05, 10.05, 10.05]}
            rotation={[0, 20, 0]}
            color="#F0000F"
        >
            <Model modelPath={sledge} materialPath={material} />
        </mesh>
    );
};

export default Sledge

// import * as THREE from 'three'
// import React from 'react'
// import { useLoader } from 'react-three-fiber'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

// const box = new THREE.Box3()
// box.setFromCenterAndSize(new THREE.Vector3(0, 0, 1), new THREE.Vector3(3, 3, 3))

// const Sledge = ({ data }) => {
//   // const gltf = useLoader(GLTFLoader, './models/drone.gltf')
//   const a = 1;
//   const b = a + 1;

//   return (
//     <group scale={[5, 5, 5]}>
//       {/* <mesh>
//         <bufferGeometry attach="geometry" {...gltf.geometry} />
//         <meshStandardMaterial attach="material" {...gltf.material} name="Body" />
//       </mesh> */}
//       <mesh>
//             <coneBufferGeometry attach='geometry' />
//             <meshStandardMaterial attach='material' color="#F0000F" />
//         </mesh>
//     </group>
//   )
// }

// export default Sledge;
