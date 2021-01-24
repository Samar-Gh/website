import * as THREE from 'three'
import React, { useMemo } from 'react'
import { useLoader, useUpdate } from 'react-three-fiber'

export default function Text({ children, vAlign = 'center', hAlign = 'center', size = 1, color = '#000000', ...props }) {
    const font = useLoader(THREE.FontLoader, '../../fonts/Asket_ExtraBold.json')
    const config = useMemo(
        () => ({ font, size: 7, height: 3, curveSegments: 30, bevelEnabled: true, bevelThickness: 0.5, bevelSize: 0.2, bevelOffset: 0, bevelSegments: 6 }),
        [font]
    )
    const mesh = useUpdate(
        (me) => {
            const dimension = new THREE.Vector3()
            me.geometry.computeBoundingBox()
            me.geometry.boundingBox.getSize(dimension)
            me.position.x = hAlign === 'center' ? -dimension.x / 2 : hAlign === 'right' ? 0 : -dimension.x
            me.position.y = vAlign === 'center' ? -dimension.y / 2 : vAlign === 'top' ? 0 : -dimension.y
        },
        [children]
    )
    return (
        <group {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
            <mesh ref={mesh} castShadow receiveShadow>
                <textBufferGeometry args={[children, config]} />
                {/* <meshNormalMaterial  /> */}
                <meshPhongMaterial
                attach="material"
                color="#d0901d"
                emissive="#aa0000"
                side="DoubleSide"
                flatShading="true" />
            </mesh>
        </group>
    )
}