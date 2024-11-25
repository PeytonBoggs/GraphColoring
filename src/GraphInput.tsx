import React, { useState } from 'react';

interface GraphInputProps {
  vertices: string[];
  setVertices: React.Dispatch<React.SetStateAction<string[]>>;
  edges: string[];
  setEdges: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function GraphInput({ vertices, setVertices, edges, setEdges } : GraphInputProps) {
  const [vertexInput, setVertexInput] = useState<string>('');
  const [edgeInput, setEdgeInput] = useState<{ from: string; to: string }>({ from: '', to: '' });

  const addVertex = () => {
    if (vertexInput && !vertices.includes(vertexInput)) {
      setVertices([...vertices, vertexInput]);
      setVertexInput('');
    }
  };

  const addEdge = () => {
    if (edgeInput.from && edgeInput.to) {
      setEdges([...edges, `${edgeInput.from}-${edgeInput.to}`]);
      setEdgeInput({ from: '', to: '' });
    }
  };

  const setDenseGraph = () => {
    setVertices(['v0', 'v1', 'v2', 'v3', 'v4', 'v5', 'v6', 'v7', 'v8', 'v9']);
    setEdges([
      'v0-v1', 'v0-v2', 'v0-v3', 'v0-v4', 'v0-v5', 'v0-v6', 'v0-v7', 'v0-v8', 'v0-v9',
      'v1-v2', 'v1-v3', 'v1-v4', 'v1-v5', 'v1-v6', 'v1-v7', 'v1-v8', 'v1-v9',
      'v2-v3', 'v2-v4', 'v2-v5', 'v2-v6', 'v2-v7', 'v2-v8',
      'v3-v4', 'v3-v5', 'v3-v6', 'v3-v7',
      'v4-v5', 'v4-v6',
      'v5-v6',
      'v7-v8', 'v7-v9',
      'v8-v9'
  ]);
  }

  return (
    <div>
      <h2>Graph Input</h2>
      <div>
        <input
          type="text"
          value={vertexInput}
          onChange={(e) => setVertexInput(e.target.value)}
          placeholder="Enter vertex"
        />
        <button onClick={addVertex}>Add Vertex</button>
      </div>
      <div style={{ padding: '5px'}}></div>
      <div>
        <input
          type="text"
          value={edgeInput.from}
          onChange={(e) => setEdgeInput({ ...edgeInput, from: e.target.value })}
          placeholder="Enter vertex"
        />
        <input
          type="text"
          value={edgeInput.to}
          onChange={(e) => setEdgeInput({ ...edgeInput, to: e.target.value })}
          placeholder="Enter vertex"
        />
        <button onClick={addEdge}>Add Edge</button>
      </div>
      <div>
        <h3>Vertices: {vertices.join(', ')}</h3>
        <h3>Edges: {edges.join(', ')}</h3>
      </div>
      <div style={{ padding: '10px'}}></div>
      <h3>Prebuilt Graphs:</h3>
      <button onClick={() => {setDenseGraph();}}>Dense Graph</button>
    </div>
  );
};