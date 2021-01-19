import React, { useState, useEffect } from "react";
import Plane from '../../components/Plane';
import Logo from "../../components/Logo";
import Sledge from "../../components/Sledge";
import { Physics } from "use-cannon";
import Tree from "../../components/Tree";
import Car from "../../components/Car";
import GroupOfTrees from "../../components/GroupOfTrees";

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

const Level1 = () => {
    // go to menu maybe?
    const esc = useKey('escape')

    // Position Keys
    const shiftAndKey = and(useKey("shift"), either(useKey("w"), useKey("arrowUp")));
    const forward = either(useKey("w"), useKey("arrowUp"));
    const right = either(useKey("d"), useKey("arrowRight"));
    const left = either(useKey("a"), useKey("arrowLeft"));
    const back = either(useKey("s"), useKey("arrowDown"));

    return (
        <group>
            <Physics>
                <Plane args={[1000, 1000]} color="#1E90FF" />

                <Logo position={[-10, 0, -50]} rotation={[Math.PI / 2, 0, 0]} />
                <Logo position={[50, 0, -10]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
                <Logo position={[10, 0, 50]} rotation={[Math.PI / 2, 0, Math.PI]} />
                <Logo position={[-50, 0, 10]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />

                <Sledge forward={forward} right={right} left={left} back={back} fast={shiftAndKey} esc={esc} />
                <Car forward={forward} right={right} left={left} back={back} fast={shiftAndKey} esc={esc} />

                {/* <Tree /> */}
                <GroupOfTrees />
            </Physics>
        </group>
    );
};

export default Level1;
