import React, { Component, useState } from 'react';
import { Canvas } from 'react-three-fiber';
// import Box from '../components/Box';
// import Plane from '../components/Plane';
import { softShadows, OrbitControls } from 'drei';
import Menu from './Menu';
import Intro from './Intro';
// import Rocket from '../components/Rocket';
// import Model from '../components/Model';
// import Sledge from '../components/Sledge';
import Level1 from './levels/Level1';
// import { Box } from 'drei';

softShadows();

class TheGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: "Intro"
        };
        this.handler = this.handler.bind(this);
    }

    handler(stat) {
        this.setState({
            currentPage: "Level1"
        });
    }

    intro = () => {
        return (<Intro parent={this.state} handler={this.handler}/>)
    }
    
    render(){
        return (
            <>
                <Canvas 
                    shadowMap
                    colorManagement
                    camera={{ position: [0, 0, 55] }}
                >
    
                    <ambientLight intensity={2} />
                    <pointLight position={[-10, 0, 20]} intensity={0.5}/>
                    <directionalLight
                        castShadow
                        position={[0, 10, 0]} 
                        intensity={1.5} 
                        shadow-mapSize-width={1024}
                        shadow-mapSize-height={1024}
                        shadow-camera-far={50}
                        shadow-camera-left={-10}
                        shadow-camera-right={10}
                        shadow-camera-top={10}
                        shadow-camera-bottom={-10}
                    /> 
                        {/* {components[this.state.displayedTable]} */}
    
                    {/* <Plane args={[100, 100]} color="#00FF00" /> */}
    
                    {/* <Box position={[0, 0, 0]} args={[2, 2, 1]} color="#E7717D"/>
                    <Box position={[4, 0, 0]} color="#FF00FF" />
                    <Box position={[8, 0, 0]} color="#FFFF00" />
                    <Box position={[0, 4, 0]} color="#00FFFF" />
                    <Box position={[0, 8, 0]} color="#F0000F" /> */}

                    {/* { (this.state.currentPage === "Intro") ? (
                        <Intro handler={this.handler}/>
                    ) : (
                        <Level1/>
                    )} */}

                    {/* {(() => {
                        switch (this.state.currentPage) {
                        case "Intro": return (this.intro());
                        case "Level1": return (<Level1/>);
                        default:      return (<Intro handler={this.handler}/>);
                        }
                    })()} */}
                    
                    
                    {/* <Rocket args={[100, 100]} color="#00FF00" /> */}
                    <Level1/>
                    <OrbitControls />
                </Canvas>
            </>
        )
    }
}

export default TheGame
