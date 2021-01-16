import React from 'react'
import * as THREE from 'three'

const Rocket = ( {args} ) => {
    // const material = new THREE.MeshNormalMaterial();
    // const coneGeom = new THREE.ConeGeometry(1, 2, 10);
    // coneGeom.translate(0, 2.5, 0);
    
    
    // const cone = new THREE.Mesh(coneGeom, material);
    // const cylinder = new THREE.CylinderGeometry(0.4, 0.6, 3, 10);
    
    // cylinder.merge(cone.geometry, cone.matrix);
    // cylinder.scale(10.05, 10.05, 10.05);
    return (
        <mesh>
            <coneBufferGeometry attach='geometry' args={args}/>
            <meshNormalMaterial attach='material' />
        </mesh>
    )
}

export default Rocket
