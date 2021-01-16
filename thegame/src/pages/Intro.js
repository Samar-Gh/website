import React, { Suspense, useRef, useCallback } from 'react'
import { useFrame } from 'react-three-fiber'
import Particles from '../components/Particles'
import Text from '../components/Text'
import Effect from '../libraries/Effect'

const handleClick = (e, props) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    return props.handler({ page: "Level1" })
}

const Blob = (props) => {
    const ref = useRef()
    useFrame(({ clock }) => (ref.current.rotation.x = Math.sin(clock.getElapsedTime()) * 0.1))
    return (
        <group ref={ref}  onClick={ e => handleClick(e, props) } >
        <Text hAlign="center" position={[0, 5, 0]} children="THE" />
        <Text hAlign="center" position={[0, 0, 0]} children="LOC" />
        <Text hAlign="center" position={[0, -5, 0]} children="CONSULTING" />
        </group>
    )
}

const Intro = (props) => {
    const mouse = useRef([0, 0])
    const onMouseMove = useCallback(({ clientX: x, clientY: y }) => (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]), [])
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    return (
        <group onMouseMove={onMouseMove}>
            <Suspense fallback={null}> 
                <Blob handler={props.handler}/>
            </Suspense>
            <Particles count={isMobile ? 1000 : 2000} mouse={mouse} />
            <Effect/>
        </group>
    )
}

export default Intro;
