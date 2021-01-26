import React from 'react'
import Tree from './Tree'

const GroupOfTrees = (props) => {
    return (
        <group position={props.position}>
            <Tree position={[12, 0, 2]}/>
            <Tree position={[12, 0, 4]}/>
            <Tree position={[12, 0, 6]}/>
            <Tree position={[4, 0, 8]}/>
            <Tree position={[6, 0, 10]}/>
            <Tree position={[8, 0, 12]}/>
            <Tree position={[6, 0, 10]}/>
            <Tree position={[18, 0, 12]}/>
            <Tree position={[26, 0, 10]}/>
            <Tree position={[18, 0, 12]}/>

            <Tree position={[10, 0, 2]}/>
            <Tree position={[10, 0, 4]}/>
            <Tree position={[10, 0, 6]}/>
            <Tree position={[14, 0, 8]}/>
            <Tree position={[16, 0, 10]}/>
            <Tree position={[18, 0, 12]}/>
            <Tree position={[16, 0, 10]}/>
            <Tree position={[11, 0, 2]}/>
            <Tree position={[12, 0, 10]}/>
            <Tree position={[14, 0, 12]}/>
        </group>
    )
}

export default GroupOfTrees
