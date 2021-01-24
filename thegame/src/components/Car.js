import React, { useEffect, useState, useRef } from 'react'
import * as CANNON from "cannon"
import { Clock, Timer } from 'three'
import { useFrame } from 'react-three-fiber'
import { useCylinder, useBox, useSphere } from 'use-cannon'
import { useSpring, a } from 'react-spring/three';

// const BoxJoin = (props) => {
//     const [ref, api] = useBox(() => ({ mass: 1, position: [0, 4, 0], rotation: [Math.PI / 2, 0, 0] }));
//     api.velocity.set(props.velocity[0], props.velocity[1], props.velocity[2]);

//     return (
//       <group>
//         <mesh
//           ref={ref}
//           position={[0, 4, 0]}
//           castShadow
//           receiveShadow
          
//         >
//         <boxBufferGeometry attach="geometry" args={[0.1, 1, 1]} />
//         <meshPhongMaterial
//           attach="material"
//           color={props.color}
//           // emissive="#aa0000"
//           side="DoubleSide"
//           flatShading="true" />
//       </mesh>
//       </group>
//     );
// }

// const Wheel = (props) => {
//   let velocity = [0, 0, 0]

//   useFrame(() => {
//     if (props.forward) {
//       velocity = [1, 0, 0]
//     }
//     if (props.back) {
//       velocity = [-1, 0, 0]
//     }
//   })
//   return(
//     <group>
//       <BoxJoin color="#11FF99" velocity={velocity}/>
//     </group>
//   )
// }

const Wheel = (props) => {
  const [ref, api] = useBox(() => ({ mass: 2, position: [0, 4, 0], rotation: [Math.PI / 2, 0, 0] }));
  // const [ref, api] = useSphere(() => ({ mass: 10, position: [0, 4, 0], rotation: [Math.PI / 2, 0, 0] }));

  useFrame(() => {
    if (props.forward) {
      api.velocity.set(3, 0, 0);
    }
    if (props.back) {
      api.velocity.set(-3, 0, 0);
    }
  })
  
  return (
    <group>
      <mesh
      onClick={() => {
        api.velocity.set(0, 2, 0);
      }}
      ref={ref}
      position={[0, 4, 0]}
      castShadow
      receiveShadow
    >
      <cylinderBufferGeometry attach="geometry" args={[0.5, 0.5, 4, 32]} />
      {/* <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />  */}
      {/* <sphereBufferGeometry attach="geometry" args={[1, 32, 32]} /> */}
      <meshPhongMaterial
        attach="material"
        color="#d0901d"
        emissive="#aa0000"
        side="DoubleSide"
        flatShading="true" />
    </mesh>
    </group>
  );
}

const Car = (props) => {
    // car physics body
    // let chassisShape = new CANNON.Box(new CANNON.Vec3(1, 0.3, 2));
    // let chassisBody = new CANNON.Body({mass: 150});
    // chassisBody.addShape(chassisShape);
    // chassisBody.position.set(0, 0.2, 0);
    // chassisBody.angularVelocity.set(0, 0, 0); // initial velocity

    // let vehicle = new CANNON.RaycastVehicle({
    //   chassisBody: chassisBody,
    //   indexRightAxis: 0, // x
    //   indexUpAxis: 1, // y
    //   indexForwardAxis: 2, // z
    // });

    // var options = {
    //   radius: 0.3,
    //   directionLocal: new CANNON.Vec3(0, -1, 0),
    //   suspensionStiffness: 45,
    //   suspensionRestLength: 0.4,
    //   frictionSlip: 5,
    //   dampingRelaxation: 2.3,
    //   dampingCompression: 4.5,
    //   maxSuspensionForce: 200000,
    //   rollInfluence:  0.01,
    //   axleLocal: new CANNON.Vec3(-1, 0, 0),
    //   chassisConnectionPointLocal: new CANNON.Vec3(1, 1, 0),
    //   maxSuspensionTravel: 0.25,
    //   customSlidingRotationalSpeed: -30,
    //   useCustomSlidingRotationalSpeed: true,
    // };

    // var axlewidth = 0.7;
    // options.chassisConnectionPointLocal.set(axlewidth, 0, -1);
    // vehicle.addWheel(options);

    // options.chassisConnectionPointLocal.set(-axlewidth, 0, -1);
    // vehicle.addWheel(options);

    // options.chassisConnectionPointLocal.set(axlewidth, 0, 1);
    // vehicle.addWheel(options);

    // options.chassisConnectionPointLocal.set(-axlewidth, 0, 1);
    // vehicle.addWheel(options);

    return (
      <group>
        <Wheel
          forward={props.forward}
          back={props.back}
          right={props.right}
          left={props.left}
          fast={props.shiftAndKey}
          esc={props.esc}
        >
        </Wheel>
      </group>
        // 
          //   <primitive object={vehicle} /> 
          //   <mesh castShadow receiveShadow>
          //      <boxBufferGeometry args={[2, 0.6, 4]}/>
          //      <meshBasicMaterial color={props.color}/>
          //  </mesh> 
            
        
    )
}

export default Car
