import React, { useRef, useState } from "react";
import Model from "./Model";
import sledge from "./models/sledge.obj";
import material from "./models/sledge.mtl";
import { useFrame } from 'react-three-fiber'
import { Clock } from 'three'
import { Physics, usePlane, useBox } from "use-cannon";

// let clock = new THREE.clock;

// const moveSledge = () => {
//     var delta = clock.getDelta(); // seconds
//     var moveDistance = 500 * delta; // n pixels per second
//     var rotateAngle = Math.PI / 2 * delta; // 90 deg per second
  
//     // move forwards, backwards, left, or right
//     if (pressed['W'] || pressed['ARROWUP']) {
//       sphereBody.velocity.z += moveDistance;
//     }
//     if (pressed['S'] || pressed['ARROWDOWN']) {
//       sphereBody.velocity.z -= moveDistance;
//     }
//     if (pressed['A'] || pressed['ARROWLEFT']) {
//       sphereBody.velocity.x += moveDistance;
//     }
//     if (pressed['D'] || pressed['ARROWRIGHT']) {
//       sphereBody.velocity.x -= moveDistance;
//     }
//   }

const Sledge = (props) => {
    // const [ref, api] = useBox(() => ({ mass: 0, position: [0, 0, 0] }));

    // const clock = new Clock();
    // let delta = clock.getDelta(); // seconds
    // let moveDistance = 500 * delta; // n pixels per second
    // let rotateAngle = Math.PI / 2 * delta; // 90 deg per second
    
    // move forwards, backwards, left, or right
    // if (props.forward) {
    //     ref.current.velocity.z += moveDistance;
    // }
    // if (pressed['S'] || pressed['ARROWDOWN']) {
    //     sphereBody.velocity.z -= moveDistance;
    // }
    // if (pressed['A'] || pressed['ARROWLEFT']) {
    //     sphereBody.velocity.x += moveDistance;
    // }
    // if (pressed['D'] || pressed['ARROWRIGHT']) {
    //     sphereBody.velocity.x -= moveDistance;
    // }




    // const [currentPosition, setCurrentPosition] = useState({
    //     x: 0,
    //     y: 0,
    //     z: 0
    // })
    // const [currentRotation, setCurrentRotation] = useState({
    //     x: 0,
    //     y: 0,
    //     z: 0
    // })

    // useFrame(() => {
    //     let posChange = false;
    //     if (props.forward) {
    //         setCurrentPosition({
    //             x: currentPosition.x + 0.2,
    //             y: 0,
    //             z: (currentPosition.x + 0.2) * Math.tan(currentRotation.y + Math.PI / 32)
    //         })
    //         posChange = true;
    //     }

    //     if (props.back) {
    //         setCurrentPosition({
    //             x: currentPosition.x - 0.2,
    //             y: 0,
    //             z: (currentPosition.x + 0.2) * Math.tan(currentRotation.y + Math.PI / 32)
    //         })
    //         posChange = true;
    //     }

    //     if (props.left) {
    //         setCurrentRotation({
    //             x: 0,
    //             y: currentRotation.y + Math.PI / 32,
    //             z: 0
    //         })
    //         posChange = true;
    //     }

    //     if (props.right) {
    //         setCurrentRotation({
    //             x: 0,
    //             y: currentRotation.y - Math.PI / 32,
    //             z: 0
    //         })
    //         posChange = true;
    //     }
    //     if (posChange) {
    //         api.position.set(currentPosition.x, 0, (currentPosition.x + 0.2) * Math.tan(currentRotation.y + Math.PI / 32));
    //         api.rotation.set(0, currentRotation.y, 0);
    //     }
    // })
    
    return (
        <mesh
            castShadow
            // onClick={() => {
            //     api.velocity.set(0, 5, 0);
            // }}
            // ref={ref}
            position={[25, 0, 0]}
            rotation={[0, 0, 0]}
            scale={[2, 2, 2]}
        >
            <Model modelPath={sledge} materialPath={material} />
        </mesh>
    );
};

export default Sledge
