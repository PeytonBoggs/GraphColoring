import { useState } from 'react';
import GraphInput from './GraphInput.tsx';
import GreedyColoring from './GreedyColoring.tsx';
import DSaturColoring from './DSaturColoring.tsx';
import RLFColoring from './RLFColoring.tsx';
import GeneticColoring from './GeneticColoring.tsx';
import DownloadButton from './DownloadButton.tsx';

export default function App() {
  const [vertices, setVertices] = useState([]);
  const [edges, setEdges] = useState([]);

  return (
    <div style={{ display: 'flex', overflowX: 'hidden' }}>
      <div style={{ padding: '20px', paddingTop: '0px', width: '35vw' }}>
        <h1 style={{ marginBottom: '-10px' }}>Graph Coloring Visualizer</h1>
        <p>Research Software by Peyton Boggs</p>
        <DownloadButton pdfUrl="/Research_on_Graph_Coloring_Algorithms.pdf" fileName="Research_on_Graph_Coloring_Algorithms.pdf" />
        <GraphInput vertices={vertices} setVertices={setVertices} edges={edges} setEdges={setEdges} />
      </div>
      <div style={{ borderLeft: '1px solid black', height: '97vh' }} />
      <div style={{ flex: 1, padding: '20px' }}>
        <GreedyColoring vertices={vertices} edges={edges} />
        <RLFColoring vertices={vertices} edges={edges} />
      </div>
      <div style={{ flex: 1, padding: '20px' }}>
        <DSaturColoring vertices={vertices} edges={edges} />
        <GeneticColoring vertices={vertices} edges={edges} />
      </div>
    </div>
  );
}