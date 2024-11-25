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

  const setK5Graph = () => {
    setVertices(['a', 'b', 'c', 'd', 'e']);
    setEdges([
      'a-b', 'a-c', 'a-d', 'a-e',
      'b-c', 'b-d', 'b-e',
      'c-d', 'c-e',
      'd-e'
    ]);
  }

  const setK33Graph = () => {
    setVertices(['a', 'b', 'c', 'd', 'e', 'f']);
    setEdges([
      'a-d', 'a-e', 'a-f',
      'b-d', 'b-e', 'b-f',
      'c-d', 'c-e', 'c-f'
    ]);
  }

  const setK15Graph = () => {
    setVertices(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o']);
    setEdges([
      'a-b', 'a-c', 'a-d', 'a-e', 'a-f', 'a-g', 'a-h', 'a-i', 'a-j', 'a-k', 'a-l', 'a-m', 'a-n', 'a-o',
      'b-c', 'b-d', 'b-e', 'b-f', 'b-g', 'b-h', 'b-i', 'b-j', 'b-k', 'b-l', 'b-m', 'b-n', 'b-o',
      'c-d', 'c-e', 'c-f', 'c-g', 'c-h', 'c-i', 'c-j', 'c-k', 'c-l', 'c-m', 'c-n', 'c-o',
      'd-e', 'd-f', 'd-g', 'd-h', 'd-i', 'd-j', 'd-k', 'd-l', 'd-m', 'd-n', 'd-o',
      'e-f', 'e-g', 'e-h', 'e-i', 'e-j', 'e-k', 'e-l', 'e-m', 'e-n', 'e-o',
      'f-g', 'f-h', 'f-i', 'f-j', 'f-k', 'f-l', 'f-m', 'f-n', 'f-o',
      'g-h', 'g-i', 'g-j', 'g-k', 'g-l', 'g-m', 'g-n', 'g-o',
      'h-i', 'h-j', 'h-k', 'h-l', 'h-m', 'h-n', 'h-o',
      'i-j', 'i-k', 'i-l', 'i-m', 'i-n', 'i-o',
      'j-k', 'j-l', 'j-m', 'j-n', 'j-o',
      'k-l', 'k-m', 'k-n', 'k-o',
      'l-m', 'l-n', 'l-o',
      'm-n', 'm-o',
      'n-o'
    ]);
  }

  const setC10Graph = () => {
    setVertices(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']);
    setEdges([
      'a-b', 'b-c', 'c-d', 'd-e', 'e-f', 'f-g', 'g-h', 'h-i', 'i-j', 'j-a'
    ]);
  }

  const setP10Graph = () => {
    setVertices(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']);
    setEdges([
      'a-b', 'b-c', 'c-d', 'd-e', 'e-f', 'f-g', 'g-h', 'h-i', 'i-j'
    ]);
  }

  const setDenseGraph = () => {
    setVertices(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l']);
    setEdges([
      'a-b', 'a-c', 'a-d', 'a-e', 'a-f', 'a-g', 'a-h', 'a-i', 'a-j', 'a-k', 'a-l',
      'b-c', 'b-d', 'b-e', 'b-f', 'b-g', 'b-h', 'b-i', 'b-j', 'b-k', 'b-l',
      'c-d', 'c-e', 'c-f', 'c-g', 'c-h', 'c-i', 'c-j', 'c-k', 'c-l',
      'd-e', 'd-f', 'd-g', 'd-h', 'd-i', 'd-j', 'd-k', 'd-l',
      'e-f', 'e-g', 'e-h', 'e-i', 'e-j', 'e-k', 'e-l',
      'f-g', 'f-h', 'f-i', 'f-j', 'f-k', 'f-l',
      'g-h', 'g-i', 'g-j', 'g-k', 'g-l',
      'h-i', 'h-j', 'h-k', 'h-l',
      'i-j', 'i-k', 'i-l',
      'j-k', 'j-l',
      'k-l'
    ]);
  }

  const setSparseGraph = () => {
    setVertices(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o']);
    setEdges([
      'a-b', 'a-c', 'a-d', 'a-e', 'a-f', 'a-g', 'a-h',
      'b-i', 'b-j', 'b-k',
      'c-l', 'c-m',
      'd-n', 'd-o',
      'e-i', 'e-l',
      'f-j', 'f-m',
      'g-k', 'g-n',
      'h-o'
    ]);
  }

  const setPetersonGraph = () => {
    setVertices(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']);
    setEdges([
      'a-b', 'b-c', 'c-d', 'd-e', 'e-a',
      'f-h', 'h-j', 'j-g', 'g-i', 'i-f',
      'a-f', 'b-g', 'c-h', 'd-i', 'e-j'
    ]);
  }

  const setTutteGraph = () => {
    setVertices(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'aa', 'ab', 'ac', 'ad', 'ae', 'af', 'ag', 'ah', 'ai', 'aj', 'ak', 'al', 'am', 'an', 'ao', 'ap', 'aq', 'ar', 'as', 'at']);
    setEdges([
      'a-b', 'a-c', 'a-d', 'b-e', 'b-f', 'c-g', 'c-h', 'd-i', 'd-j',
      'e-k', 'e-l', 'f-m', 'f-n', 'g-o', 'g-p', 'h-q', 'h-r', 'i-s', 'i-t', 'j-u', 'j-v',
      'k-w', 'l-x', 'm-y', 'n-z', 'o-aa', 'p-ab', 'q-ac', 'r-ad', 's-ae', 't-af', 'u-ag', 'v-ah',
      'w-ai', 'w-aj', 'x-ai', 'x-ak', 'y-aj', 'y-al', 'z-ak', 'z-al',
      'aa-am', 'aa-an', 'ab-am', 'ab-ao', 'ac-an', 'ac-ap', 'ad-ao', 'ad-ap',
      'ae-aq', 'ae-ar', 'af-aq', 'af-as', 'ag-ar', 'ag-at', 'ah-as', 'ah-at',
      'ai-am', 'aj-an', 'ak-ao', 'al-ap', 'aq-as', 'ar-at'
]);
  }

  const setModifiedWheelGraph = () => {
    setVertices(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']);
    setEdges([
      'a-b', 'a-c', 'a-d', 'a-e', 'a-f', 'a-g', 'a-h', 'a-i', 'a-j', 'a-k', 'a-l',
      'b-c', 'c-d', 'd-e', 'e-f', 'f-g', 'g-h', 'h-i', 'i-j', 'j-k', 'k-l', 'l-b',
      'm-n', 'm-o', 'm-p', 'm-q', 'm-r', 'm-s', 'm-t', 'm-u', 'm-v', 'm-w', 'm-x',
      'n-o', 'o-p', 'p-q', 'q-r', 'r-s', 's-t', 't-u', 'u-v', 'v-w', 'w-x', 'x-n',
      'b-n', 'c-o', 'd-p', 'e-q', 'f-r', 'g-s', 'h-t', 'i-u', 'j-v', 'k-w', 'l-x',
      'b-p', 'c-q', 'd-r', 'e-s', 'f-t', 'g-u', 'h-v', 'i-w', 'j-x', 'k-n', 'l-o',
      'n-y', 'p-y', 'r-y', 't-y', 'v-y', 'x-y',
      'o-z', 'q-z', 's-z', 'u-z', 'w-z', 'y-z'
    ]);
  }

  const setClusteredGraph = () => {
    setVertices(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r']);
    setEdges([
      'a-b', 'a-c', 'a-d', 'b-c', 'b-d', 'c-d',
      'e-f', 'e-g', 'e-h', 'f-g', 'f-h', 'g-h',
      'i-j', 'i-k', 'i-l', 'j-k', 'j-l', 'k-l',
      'm-n', 'm-o', 'm-p', 'n-o', 'n-p', 'o-p',
      'a-e', 'b-i', 'c-m', 'd-q',
      'f-j', 'g-n', 'h-r',
      'k-o', 'l-p',
      'q-r', 'q-e', 'q-i', 'q-m',
      'r-a', 'r-f', 'r-k', 'r-n'
    ]);
  }

  const setIrregularDenseGraph1 = () => {
    setVertices(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't']);
    setEdges([
      'a-b', 'a-c', 'a-d', 'a-e', 'a-f', 'a-g', 'a-h',
      'b-c', 'b-d', 'b-e', 'b-i', 'b-j',
      'c-d', 'c-k', 'c-l',
      'd-m', 'd-n',
      'e-f', 'e-o', 'e-p',
      'f-g', 'f-q',
      'g-h', 'g-r',
      'h-s', 'h-t',
      'i-j', 'i-k', 'i-l', 'i-m',
      'j-n', 'j-o',
      'k-p', 'k-q',
      'l-r', 'l-s',
      'm-t', 'm-o',
      'n-p', 'n-q',
      'o-r', 'o-s',
      'p-t', 'p-q',
      'q-r', 'q-s',
      'r-t', 'r-s',
      's-t'
    ]);
  }

  const setIrregularDenseGraph2 = () => {
    setVertices(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p']);
    setEdges([
      'a-b', 'a-c', 'a-d', 'a-e', 'a-f', 'a-g', 'a-h',
      'b-c', 'b-d', 'b-e', 'b-i', 'b-j', 'b-k',
      'c-d', 'c-f', 'c-l', 'c-m',
      'd-g', 'd-n', 'd-o',
      'e-f', 'e-h', 'e-i', 'e-p',
      'f-g', 'f-j', 'f-l',
      'g-k', 'g-m', 'g-n',
      'h-i', 'h-j', 'h-o', 'h-p',
      'i-k', 'i-l', 'i-m',
      'j-n', 'j-o',
      'k-p', 'k-l',
      'l-o', 'l-p',
      'm-n', 'm-p',
      'n-o', 'o-p'
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
      <button style={ {padding: "5px", margin: "5px" }} onClick={() => {setK5Graph();}}>K5 Graph</button>
      <button style={ {padding: "5px", margin: "5px" }} onClick={() => {setK33Graph();}}>K33 Graph</button>
      <button style={ {padding: "5px", margin: "5px" }} onClick={() => {setK15Graph();}}>K15 Graph</button>
      <button style={ {padding: "5px", margin: "5px" }} onClick={() => {setC10Graph();}}>C10 Graph</button>
      <button style={ {padding: "5px", margin: "5px" }} onClick={() => {setP10Graph();}}>P10 Graph</button>
      <button style={ {padding: "5px", margin: "5px" }} onClick={() => {setDenseGraph();}}>Dense Graph</button>
      <button style={ {padding: "5px", margin: "5px" }} onClick={() => {setSparseGraph();}}>Sparse Graph</button>
      <button style={ {padding: "5px", margin: "5px" }} onClick={() => {setPetersonGraph();}}>Peterson Graph</button>
      <button style={ {padding: "5px", margin: "5px" }} onClick={() => {setTutteGraph();}}>Tutte Graph</button>
      <button style={ {padding: "5px", margin: "5px" }} onClick={() => {setModifiedWheelGraph();}}>Modified Wheel Graph</button>
      <button style={ {padding: "5px", margin: "5px" }} onClick={() => {setClusteredGraph();}}>Clustered Graph</button>
      <button style={ {padding: "5px", margin: "5px" }} onClick={() => {setIrregularDenseGraph1();}}>Irregular Dense Graph 1</button>
      <button style={ {padding: "5px", margin: "5px" }} onClick={() => {setIrregularDenseGraph2();}}>Irregular Dense Graph 2</button>
    </div>
  );
};