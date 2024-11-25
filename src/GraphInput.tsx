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
    </div>
  );
};