import { useState } from 'react';
import GraphInput from './GraphInput.tsx';

export default function App() {
  const [vertices, setVertices] = useState([]);
  const [edges, setEdges] = useState([]);

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
        <h1>MATH 332 Course Project</h1>
        <GraphInput vertices={vertices} setVertices={setVertices} edges={edges} setEdges={setEdges} />
      </div>
      <div style={{ flex: 1, padding: '20px', overflow: 'hidden' }}>
      </div>
    </div>
  );
}