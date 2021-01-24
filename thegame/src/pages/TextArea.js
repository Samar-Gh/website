import React from 'react'
import { Html } from 'drei'
import { Renderer } from 'react-three-fiber';

// Event Listeners:

// const camera = THREE.camera;
// camera.position = [0, 8, 10];
// camera.fov = 60;

const root = document.getElementById("root");
let height = root.clientHeight;
let width = root.clientWidth;

const onWindowResize = () => {
    height = root.clientHeight;
    width = root.clientWidth;
    // camera.position = [0, 8, 10];
    // camera.fov = 60;
    // camera.aspect = window.innerWidth / window.innerHeight;
    // camera.updateProjectionMatrix();

    // renderer.setSize( window.innerWidth, window.innerHeight );
}

window.addEventListener("resize", onWindowResize, false);

const TextArea = () => {
    

    const onWinResize = () => {
        height = root.clientHeight;
        width = root.clientWidth;
    }
    return (
        <Html onWindowResize={onWinResize} >
            <div>
                <div
                    style={{
                        top: `${(document.getElementById("root").clientHeight / 4)}px`
                    }}
                    class="bottom"
                >
                    <table>
                        <tr>
                            <td>
                                <div class="bottomtext">Esc</div>
                            </td>
                            <td>
                            </td>
                            <td>
                            </td>
                            <td>
                                <div class="bottomtext">↑</div>
                            </td>
                            <td>
                            </td>
                            <td>
                            </td>
                            <td>
                                <div class="bottomtext">Ret</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="bottomtext">Tab</div>
                            </td>
                            <td>
                            </td>
                            <td>
                                <div class="bottomtext">←</div>
                            </td>
                            <td>
                                <div class="bottomtext">↓</div>
                            </td>
                            <td>
                                <div class="bottomtext">→</div>
                            </td>
                            <td>
                            </td>
                            <td>
                                <div class="bottomtext">⇧</div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </Html>
    )
}

export default TextArea
