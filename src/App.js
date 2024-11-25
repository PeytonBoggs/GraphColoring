import { useState } from 'react';
import GraphInput from './GraphInput.tsx';
import GreedyColoring from './GreedyColoring.tsx';
import DSaturColoring from './DSaturColoring.tsx';

export default function App() {
  const [vertices, setVertices] = useState([]);
  const [edges, setEdges] = useState([]);

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ padding: '20px', paddingTop: '0px', width: '35vw' }}>
        <h1 style={{ marginBottom: '-15px' }}>MATH 332 Course Project</h1>
        <p>Peyton Boggs</p>
        <GraphInput vertices={vertices} setVertices={setVertices} edges={edges} setEdges={setEdges} />
      </div>
      <div style={{ flex: 1, padding: '20px' }}>
        <GreedyColoring vertices={vertices} edges={edges} />
        <DSaturColoring vertices={vertices} edges={edges} />
      </div>
      <div style={{ flex: 1, padding: '20px' }}>
        <GreedyColoring vertices={vertices} edges={edges} />
        <DSaturColoring vertices={vertices} edges={edges} />
      </div>
    </div>
  );
}