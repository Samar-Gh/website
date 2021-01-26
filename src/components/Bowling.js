import React from 'react'
import { Physics } from 'use-cannon'
import BowlingBall from './BowlingBall'
import BowlingPin from './BowlingPin'

const Bowling = () => {
    return (
        <React.Fragment>

            <BowlingPin position={[40, 0.001, 3]}/>
            <BowlingPin position={[40, 0.001, 1]}/>
            <BowlingPin position={[40, 0.001, -1]}/>
            <BowlingPin position={[40, 0.001, -3]}/>

            <BowlingPin position={[38, 0.001, 2]}/>
            <BowlingPin position={[38, 0.001, 0]}/>
            <BowlingPin position={[38, 0.001, -2]}/>

            <BowlingPin position={[36, 0.001, 1]}/>
            <BowlingPin position={[36, 0.001, -1]}/>

            <BowlingPin position={[34, 0.001, 0]}/>

            <BowlingBall position={[10, 1, 0]}/>

        </React.Fragment>
    )
}

export default Bowling
