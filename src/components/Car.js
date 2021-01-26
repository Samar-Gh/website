import React, { useEffect, useState, useRef } from 'react'
import * as CANNON from "cannon"
import { Clock, Timer } from 'three'
import { useFrame } from 'react-three-fiber'
import { useCylinder, useBox, useSphere } from 'use-cannon'
import { useSpring, a } from 'react-spring/three';

function useKey(key){
  const[pressed, setPressed] = useState(false)
  const match = event => key.toLowerCase() == event.key.toLowerCase();
  const onDown = event => {
      if(match(event)) setPressed(true)
  }
  const onUp = event => {
      if(match(event)) setPressed(false)
  }
  useEffect(() => {
      window.addEventListener('keydown', onDown)
      window.addEventListener('keyup', onUp)
      return () => {
          window.removeEventListener('keydown', onDown)
          window.removeEventListener('keyup', onUp)
      }
  }, [key])
  return pressed;
}

const and = (k1, k2) => k1 && k2;
const either = (k1, k2) => k1 || k2;

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
  const esc = useKey('escape')

  // Position Keys
  const shiftAndKey = and(useKey("shift"), either(useKey("w"), useKey("arrowUp")));
  const forward = either(useKey("w"), useKey("arrowUp"));
  const right = either(useKey("d"), useKey("arrowRight"));
  const left = either(useKey("a"), useKey("arrowLeft"));
  const back = either(useKey("s"), useKey("arrowDown"));
    return (
      <group>
        <Wheel
          forward={forward}
          back={back}
          right={right}
          left={left}
          fast={shiftAndKey}
          esc={esc}
          color="#885555"
        >
        </Wheel>
      </group>
    )
}

export default Car


// import React, { useEffect, useState, useRef } from 'react'
// import * as CANNON from "cannon"
// import { Clock, Timer } from 'three'
// import { useFrame } from 'react-three-fiber'
// import { useCylinder, useBox, useSphere } from 'use-cannon'
// import { useSpring, a } from 'react-spring/three';

// const Wheel = (props) => {
//   const [ref, api] = useBox(() => ({ mass: 2, position: [0, 4, 0], rotation: [Math.PI / 2, 0, 0] }));
//   // const [ref, api] = useSphere(() => ({ mass: 10, position: [0, 4, 0], rotation: [Math.PI / 2, 0, 0] }));

//   useFrame(() => {
//     if (props.forward) {
//       api.velocity.set(3, 0, 0);
//     }
//     if (props.back) {
//       api.velocity.set(-3, 0, 0);
//     }
//   })
  
//   return (
//     <group>
//       <mesh
//       onClick={() => {
//         api.velocity.set(0, 2, 0);
//       }}
//       ref={ref}
//       position={[0, 4, 0]}
//       castShadow
//       receiveShadow
//     >
//       <cylinderBufferGeometry attach="geometry" args={[0.5, 0.5, 4, 32]} />
//       {/* <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />  */}
//       {/* <sphereBufferGeometry attach="geometry" args={[1, 32, 32]} /> */}
//       <meshPhongMaterial
//         attach="material"
//         color="#d0901d"
//         emissive="#aa0000"
//         side="DoubleSide"
//         flatShading="true" />
//     </mesh>
//     </group>
//   );
// }

// const Car = (props) => {
//     return (
//       <group>
//         <Wheel
//           forward={props.forward}
//           back={props.back}
//           right={props.right}
//           left={props.left}
//           fast={props.shiftAndKey}
//           esc={props.esc}
//         >
//         </Wheel>
//       </group>
//     )
// }

// export default Car
