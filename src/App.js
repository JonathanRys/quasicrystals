import './App.css';
import { crystalData, crystalDataPoints } from './data/HandmerQuasiCrystalVertex.js';
import React from 'react';
import * as THREE from 'three';
import { extend, Canvas } from '@react-three/fiber';
import {Line} from '@react-three/drei';

extend(THREE)

function App() {
  return (
    <div className="App">
      <header className="App-header">
         Quasicrystals
      </header>
      <Canvas className="Canvas">
        {/*<Line
          points={crystalDataPoints}
          color={'#FF0000'}
          lineWidth={1}
           />*/}
        {
          crystalData.map(
            (points, i) => <Line key={`line-${i}`} points={points} color={'#000000'} lineWidth={1} />
          )
        }
      </Canvas>
    </div>
  );
}

export default App;
