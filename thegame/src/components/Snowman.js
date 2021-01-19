import React from 'react'
import { Vector3, FlatShading } from 'three'

const TreeGeometry = (props) => {
    return (
        <mesh>
            <coneBufferGeometry args={[ 0.5, 1, props.sides, props.tiers ]}/>
            <meshStandardMaterial color="#009900" shading={FlatShading}/>
        </mesh>
    )
}

const TreeTop = (props) => {
    let sides=8;
    let tiers=6;
    return (
        <mesh 
            castShadow="true"
            receiveShadow="false"
            position={[0, 0.9, 0]}
            rotation={[0, (Math.random()*(Math.PI)), 0]}
        >
            <TreeGeometry args={[ 0.5, 1, sides, tiers ]}/>
            <meshStandardMaterial color="#886633" shading={FlatShading}/>
        </mesh>
    )
}

const TreeTrunk = (props) => {
    return (
        <mesh
            position={[0, 0.25, 0]}
        >
            <cylinderBufferGeometry args={[ 0.1, 0.1, 0.5]} />
            <meshStandardMaterial color="#886633" shading={FlatShading} />
        </mesh>
    )
}

const SnowMan = (props) => {
    var scalarMultiplier=(Math.random()*(0.25-0.1))+0.05;
    var midPointVector= new Vector3();
    var vertexVector= new Vector3();
    // var offset;
    // midPointVector=treeGeometry.vertices[0].clone();
    var currentTier=0;
    var vertexIndex;
    // blowUpTree(treeGeometry.vertices,sides,0,scalarMultiplier);
    // tightenTree(treeGeometry.vertices,sides,1);
    // blowUpTree(treeGeometry.vertices,sides,2,scalarMultiplier*1.1,true);
    // tightenTree(treeGeometry.vertices,sides,3);
    // blowUpTree(treeGeometry.vertices,sides,4,scalarMultiplier*1.2);
    // tightenTree(treeGeometry.vertices,sides,5);
    return (
        <group>
            <TreeTrunk />
            <TreeTop />
        </group>
    )
}

export default SnowMan


// function blowUpTree(vertices,sides,currentTier,scalarMultiplier,odd){
//     var vertexIndex;
//     var vertexVector= new THREE.Vector3();
//     var midPointVector=vertices[0].clone();
//     var offset;
//     for(var i=0;i<sides;i++){
//         vertexIndex=(currentTier*sides)+1;
//         vertexVector=vertices[i+vertexIndex].clone();
//         midPointVector.y=vertexVector.y;
//         offset=vertexVector.sub(midPointVector);
//         if(odd){
//             if(i%2===0){
//                 offset.normalize().multiplyScalar(scalarMultiplier/6);
//                 vertices[i+vertexIndex].add(offset);
//             }else{
//                 offset.normalize().multiplyScalar(scalarMultiplier);
//                 vertices[i+vertexIndex].add(offset);
//                 vertices[i+vertexIndex].y=vertices[i+vertexIndex+sides].y+0.05;
//             }
//         }else{
//             if(i%2!==0){
//                 offset.normalize().multiplyScalar(scalarMultiplier/6);
//                 vertices[i+vertexIndex].add(offset);
//             }else{
//                 offset.normalize().multiplyScalar(scalarMultiplier);
//                 vertices[i+vertexIndex].add(offset);
//                 vertices[i+vertexIndex].y=vertices[i+vertexIndex+sides].y+0.05;
//             }
//         }
//     }
// }
// function tightenTree(vertices,sides,currentTier){
//     var vertexIndex;
//     var vertexVector= new THREE.Vector3();
//     var midPointVector=vertices[0].clone();
//     var offset;
//     for(var i=0;i<sides;i++){
//         vertexIndex=(currentTier*sides)+1;
//         vertexVector=vertices[i+vertexIndex].clone();
//         midPointVector.y=vertexVector.y;
//         offset=vertexVector.sub(midPointVector);
//         offset.normalize().multiplyScalar(0.06);
//         vertices[i+vertexIndex].sub(offset);
//     }
// }