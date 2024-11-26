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
    if (vertices.includes(edgeInput.from) && vertices.includes(edgeInput.to)) {
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

  const setCrownGraph = () => {
    setVertices([
      'u0', 'u1', 'u2', 'u3', 'u4',
      'v0', 'v1', 'v2', 'v3', 'v4'
    ]);
  
    setEdges([
      'u0-v1', 'u0-v2', 'u0-v3', 'u0-v4',
      'u1-v0', 'u1-v2', 'u1-v3', 'u1-v4',
      'u2-v0', 'u2-v1', 'u2-v3', 'u2-v4',
      'u3-v0', 'u3-v1', 'u3-v2', 'u3-v4',
      'u4-v0', 'u4-v1', 'u4-v2', 'u4-v3'
    ]);
  };

  const setCrownGraph2 = () => {
    setVertices([
        'u0', 'v0', 'u1', 'v1', 'u2', 'v2', 'u3', 'v3', 'u4', 'v4',
        'u5', 'v5', 'u6', 'v6', 'u7', 'v7', 'u8', 'v8', 'u9', 'v9'
    ]);

    setEdges([
        'u0-v1', 'u0-v2', 'u0-v3', 'u0-v4', 'u0-v5', 'u0-v6', 'u0-v7', 'u0-v8', 'u0-v9',
        'u1-v0', 'u1-v2', 'u1-v3', 'u1-v4', 'u1-v5', 'u1-v6', 'u1-v7', 'u1-v8', 'u1-v9',
        'u2-v0', 'u2-v1', 'u2-v3', 'u2-v4', 'u2-v5', 'u2-v6', 'u2-v7', 'u2-v8', 'u2-v9',
        'u3-v0', 'u3-v1', 'u3-v2', 'u3-v4', 'u3-v5', 'u3-v6', 'u3-v7', 'u3-v8', 'u3-v9',
        'u4-v0', 'u4-v1', 'u4-v2', 'u4-v3', 'u4-v5', 'u4-v6', 'u4-v7', 'u4-v8', 'u4-v9',
        'u5-v0', 'u5-v1', 'u5-v2', 'u5-v3', 'u5-v4', 'u5-v6', 'u5-v7', 'u5-v8', 'u5-v9',
        'u6-v0', 'u6-v1', 'u6-v2', 'u6-v3', 'u6-v4', 'u6-v5', 'u6-v7', 'u6-v8', 'u6-v9',
        'u7-v0', 'u7-v1', 'u7-v2', 'u7-v3', 'u7-v4', 'u7-v5', 'u7-v6', 'u7-v8', 'u7-v9',
        'u8-v0', 'u8-v1', 'u8-v2', 'u8-v3', 'u8-v4', 'u8-v5', 'u8-v6', 'u8-v7', 'u8-v9',
        'u9-v0', 'u9-v1', 'u9-v2', 'u9-v3', 'u9-v4', 'u9-v5', 'u9-v6', 'u9-v7', 'u9-v8'
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

  const setIrregularDenseGraph3 = () => {
    setVertices([
      '49', '37', '1', '6', '40', '5', '14', '19', '10', '30',
      '32', '25', '29', '20', '9', '12', '4', '48', '3', '36',
      '11', '46', '28', '23', '34', '2', '35', '44', '26', '42',
      '15', '13', '0', '39', '31', '22', '16', '8', '21', '27',
      '24', '18', '47', '33', '41', '38', '17', '7', '43', '45'
    ]);
  
    setEdges([
      '0-20', '35-45', '27-47', '23-26', '6-26', '31-41', '33-34',
      '1-21', '3-4', '8-9', '20-30', '33-43', '30-40', '20-40',
      '28-48', '12-22', '27-29', '16-36', '38-48', '19-29', '42-44',
      '28-33', '15-16', '20-23', '15-25', '0-10', '13-19', '12-32',
      '16-26', '42-43', '12-13', '30-45', '7-8', '36-37', '22-24',
      '28-29', '20-35', '25-45', '24-25', '13-23', '21-41', '21-22',
      '11-31', '30-31', '14-15', '7-17', '2-22', '46-47', '37-39',
      '32-33', '32-34', '17-19', '21-31', '23-33', '11-12', '27-37',
      '34-35', '1-2', '36-46', '22-23', '47-48', '17-18', '4-14',
      '12-14', '14-24', '9-10', '40-49', '19-39', '39-49', '5-25',
      '14-34', '48-49', '5-15', '25-26', '34-44', '39-40', '7-27',
      '3-13', '22-32', '18-38', '18-19', '3-23', '26-27', '43-44',
      '9-19', '31-32', '33-36', '16-17', '17-37', '37-47', '24-34',
      '26-36', '38-39', '35-36', '5-6', '37-38', '24-44', '41-42',
      '8-18', '29-49', '10-20', '7-9', '15-35', '0-1', '4-5',
      '25-35', '48-1', '20-21', '13-14', '17-27', '29-39', '38-43',
      '44-45', '2-12', '1-11', '32-42', '27-28', '22-42', '8-11',
      '43-46', '19-22', '23-24', '10-11', '47-49', '9-29', '0-2',
      '45-46', '40-41', '15-16', '11-21', '10-25', '6-7', '26-46',
      '4-24', '6-16', '28-38', '18-28', '29-30', '8-28', '5-15',
      '13-33', '23-43', '10-30', '2-3', '19-20', '3-5'
    ]);
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
      <button style={ {padding: "5px", margin: "5px" }} onClick={() => {setCrownGraph();}}>Crown Graph</button>
      <button style={ {padding: "5px", margin: "5px" }} onClick={() => {setCrownGraph2();}}>Crown Graph 2</button>
      <button style={ {padding: "5px", margin: "5px" }} onClick={() => {setIrregularDenseGraph1();}}>Irregular Dense Graph 1</button>
      <button style={ {padding: "5px", margin: "5px" }} onClick={() => {setIrregularDenseGraph2();}}>Irregular Dense Graph 2</button>
      <button style={ {padding: "5px", margin: "5px" }} onClick={() => {setIrregularDenseGraph3();}}>Irregular Dense Graph 3</button>
      <div>
        <h3>Vertices: {vertices.join(', ')}</h3>
        <h3>Edges: {edges.join(', ')}</h3>
      </div>
    </div>
  );
};