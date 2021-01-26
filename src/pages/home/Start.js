import React, { useState } from 'react'
import { useThree, useFrame } from "react-three-fiber"
import * as THREE from 'three'
import * as CANNON from "cannon";
import { useDrag } from "react-use-gesture";
import { useCannon, Provider } from '../../libraries/UseCannon';
import TLC from './TLC';
import { Html } from 'drei'
import { Link } from "react-router-dom";

const Letter = () => {
    return(
        <TLC />
    )
}

function DraggableObject({ position: initialPosition }) {
    const { size, viewport } = useThree();
    const [position, setPosition] = useState(initialPosition);
    const [quaternion, setQuaternion] = useState([0, 0, 0, 0]);
    const aspect = size.width / viewport.width;

    const { ref, body } = useCannon({ bodyProps: { mass: 100000 } }, body => {
        body.addShape(new CANNON.Box(new CANNON.Vec3(1, 1, 1)))
        body.position.set(...position);
    }, []);

    const bind = useDrag(({ offset: [,], xy: [x, y], first, last }) => {
        if (first) {
            body.mass = 0;
            body.updateMassProperties();
        } else if (last) {
            body.mass = 10000;
            body.updateMassProperties();
        }
        body.position.set((x - size.width / 2) / aspect, -(y - size.height / 2) / aspect, -0.7);
    }, { pointerEvents: true });

    useFrame(() => {
        // Sync cannon body position with three js
        const deltaX = Math.abs(body.position.x - position[0]);
        const deltaY = Math.abs(body.position.y - position[1]);
        const deltaZ = Math.abs(body.position.z - position[2]);
        if (deltaX > 0.001 || deltaY > 0.001 || deltaZ > 0.001) {
            setPosition(body.position.clone().toArray());
        }
        const bodyQuaternion = body.quaternion.toArray();
        const quaternionDelta = bodyQuaternion.map((n, idx) => Math.abs(n - quaternion[idx]))
            .reduce((acc, curr) => acc + curr);
        if (quaternionDelta > 0.01) {
            setQuaternion(body.quaternion.toArray());
        }
    });
    return (
        <mesh ref={ref} castShadow position={position} quaternion={quaternion} {...bind()}
            onClick={e => {
                e.stopPropagation();
            }}
        >
            <Letter />
        </mesh>
    )
}

function Plane({ position, onPlaneClick }) {
    const { ref } = useCannon({ bodyProps: { mass: 0 } }, body => {
        body.addShape(new CANNON.Plane())
        body.position.set(...position)
    })
    return (
        <mesh ref={ref} receiveShadow position={position}
            onClick={onPlaneClick}>
            <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
            <meshPhongMaterial attach="material" color="#333333" />
        </mesh>
    )
}

function Objects({ objects, addObject }) {
    return <React.Fragment>
        {objects}
    </React.Fragment>;
}

const Start = () => {
    const [objects, setObjects] = useState([]);

    const { mouse, camera } = useThree();
    const onPlaneClick = (e) => {
        var vector = new THREE.Vector3(mouse.x, mouse.y, 0);
        vector.unproject(camera);
        var dir = vector.sub(camera.position).normalize();
        var distance = - camera.position.z / dir.z;
        var pos = camera.position.clone().add(dir.multiplyScalar(distance));
        const position = [pos.x, pos.y, 6];
        setObjects([...objects,
            <DraggableObject position={position} key={Math.random()} />
        ]);
    };

    return (
        <group
            onCreated={({ gl }) => {
                gl.shadowMap.enabled = true;
                gl.shadowMap.type = THREE.PCFSoftShadowMap;
            }}
        >
            <React.Fragment>
                <ambientLight intensity={0.5} />
                <spotLight intensity={0.6} position={[30, 30, 50]} angle={0.2} penumbra={1} castShadow />
                <Provider>
                    <Objects objects={objects}>
                    </Objects>
                    <Plane position={[0, 0, -1]} onPlaneClick={onPlaneClick} />
                </Provider>
            </React.Fragment>
            <Html>
            <div>
                <div
                    style={{
                        top: `${(document.getElementById("root").clientHeight / 4)}px`
                    }}
                    class="start"
                >
                    <div class="clicktostart">
                        <a href="/Game" class="startgamelink" >
                            CLICK TO START
                        </a>
                    </div>
                </div>
            </div>
            </Html>
        </group>
    )
}

export default Start
