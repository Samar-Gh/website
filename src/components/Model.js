import React, { useMemo, useState } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';

const Model = ({ modelPath, materialPath }) => {
  const [mat, setMat] = useState();
  useMemo(() => new MTLLoader().load(materialPath, setMat), [materialPath]);
  if (mat) {
    const objLoader = new OBJLoader();
    objLoader.load(modelPath, setMat);
    objLoader.setMaterials(mat);
    objLoader.castShadow = true;
  }
  return mat ? <primitive object={mat} /> : null;
};

export default Model;