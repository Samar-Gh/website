import React, { useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from 'react-three-fiber';
import { OrbitControls } from 'drei';
import TextArea from './TextArea';

import Plane from '../../components/Plane';
import Logo from "../../components/Logo";
import { Physics } from "use-cannon";
import Tree from "../../components/Tree";
import GroupOfTrees from "../../components/GroupOfTrees";
import Car from "../../components/Car";
import CANNON from "cannon";
import Barrel from "../../components/Barrel";
import Player from "../../components/Player";
import * as THREE from 'three'
import BowlingPin from "../../components/BowlingPin";
import Bowling from "../../components/Bowling";



const clock = new THREE.Clock();
clock.running = true;
const dt = clock.getDelta();
function playerControl(player, forward, turn) {
    
    if (player.current) {
        if (forward==0 && turn==0) {
                delete player.current.userData.move;
        } else {
            if (player.current.userData===undefined) player.current.userData = {};
            player.current.userData.move = { forward, turn }; 
        }
        if (player.current.userData!==undefined && player.current.userData.move!==undefined){
            player.current.translateZ(player.current.userData.move.forward * dt * 5);
            player.current.rotateY(player.current.userData.move.turn * dt);
        }
    }
    
}

const Game = () => {
    const player = useRef()
    const cam = [0, 8, 10];

    

        // camera.position.lerp(cameras[cameraIndex].getWorldPosition(new THREE.Vector3()), 0.05);
        // const pos = player.position.clone();
        // pos.y += 3;
        // camera.lookAt(pos);

    function keyDown(evt){
        let forward = (player.current !== undefined && player.current.userData !== undefined && player.current.userData.move !== undefined) ? player.current.userData.move.forward : 0;
        let turn = (player.current !== undefined && player.current.userData !== undefined && player.current.userData.move !== undefined) ?  player.current.userData.move.turn : 0;
        
        switch(evt.keyCode){
        case 87://W
            forward = -0.2;
            break;
        case 83://S
            forward = 0.2;
            break;
        case 65://A
            turn = 0.2;
            break;
        case 68://D
            turn = -0.2;
            break;
            default:
                break;
        }
        playerControl(player, forward, turn);
    }
    
    function keyUp(evt){
        let forward = (player.current !== undefined && player.current.userData !== undefined && player.current.userData.move !== undefined) ? player.current.userData.move.forward : 0;
        let turn = (player.current !== undefined && player.current.move !== undefined && player.current.userData.move !== undefined) ?  player.current.userData.move.turn : 0;
        
        switch(evt.keyCode){
        case 87://W
            forward = 0;
            break;
        case 83://S
            forward = 0;
            break;
        case 65://A
            turn = 0;
            break;
        case 68://D
            turn = 0;
            break;
        default:
            break;
        }
        playerControl(player, forward, turn);
    }
    
    document.addEventListener( 'keydown', keyDown );
    document.addEventListener( 'keyup', keyUp );

    function resize(){
        // camera.aspect = window.innerWidth / window.innerHeight;
        // camera.updateProjectionMatrix();
        // renderer.setSize( window.innerWidth, window.innerHeight );
    }
    
    window.addEventListener( 'resize', resize, false);

    


    function update(){
        // requestAnimationFrame( update );
        //     renderer.render( scene, camera );
        
        // const dt = clock.getDelta();
        
        // if (player.userData!==undefined && player.userData.move!==undefined){
        //     player.translateZ(player.userData.move.forward * dt * 5);
        //     player.rotateY(player.userData.move.turn * dt);
        // }
        
        // camera.position.lerp(cameras[cameraIndex].getWorldPosition(new THREE.Vector3()), 0.05);
        // const pos = player.position.clone();
        // pos.y += 3;
        // camera.lookAt(pos);
    }
    // update();


    return (
        <Canvas 
            colorManagement
            shadowMap
            // camera={{ position: [0, 8, 10], fov: 60 }}
            camera={{ position: [cam[0], cam[1], cam[2]], fov: 60 }}
        >
            <ambientLight intensity={0.9} />
            <pointLight position={[0, 100, 20]} intensity={0.7} castShadow/>
            {/* <directionalLight
                castShadow
                position={[-10, 10, -10]} 
                intensity={0.5} 
                shadow-mapSize-width={512}
                shadow-mapSize-height={512}
                shadow-camera-far={100}
                shadow-camera-left={-100}
                shadow-camera-right={100}
                shadow-camera-top={100}
                shadow-camera-bottom={-100}
            /> */}
            <Physics>
                <Plane args={[1000, 1000]} color="#FFBB00" />
                <Logo position={[-10, 0, -50]} rotation={[Math.PI / 2, 0, 0]} />
                <Logo position={[50, 0, -10]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
                <Logo position={[10, 0, 50]} rotation={[Math.PI / 2, 0, Math.PI]} />
                <Logo position={[-50, 0, 10]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
                <Barrel position={[-18, 0, 0]}/>
                {/* <Player ref={player} /> */}
                <group position={[0,0.8,0]} ref={player}>
                    <mesh castShadow>
                        <boxBufferGeometry args={[1,1,1]} />
                        <meshStandardMaterial color="#ffff00" />;
                    </mesh>
                    <mesh position={[0,1.2,0]} castShadow>
                        <sphereBufferGeometry args={[0.3, 20, 15]} />
                        <meshStandardMaterial color="#ffff00" />;
                    </mesh>
                </group>

                <Bowling />
                <GroupOfTrees position={[10, 0, 20]}/>
                <GroupOfTrees position={[10, 0, -40]}/>
                <GroupOfTrees position={[-40, 0, 20]}/>
                <GroupOfTrees position={[-40, 0, -40]}/>
                
                <GroupOfTrees position={[30, 0, 40]}/>
                <GroupOfTrees position={[30, 0, -60]}/>
                <GroupOfTrees position={[-60, 0, 40]}/>
                <GroupOfTrees position={[-60, 0, -60]}/>
            </Physics>
            <OrbitControls />
            <TextArea />
        </Canvas>
    )
}

export default Game
