import React, { useState, useEffect } from 'react';
import Graph from 'react-graph-vis';

interface GreedyColoringProps {
  vertices: string[];
  edges: string[];
}

interface GraphNode {
  id: string;
  label: string;
}

interface GraphEdge {
  from: string;
  to: string;
}

interface GraphData {
  nodes: GraphNode[];
  edges: GraphEdge[];
}

const getColorForIndex = (index: number): string => {
    const colors = [
      '#FFB3BA', // Light Pink
      '#BAFFC9', // Light Green
      '#BAE1FF', // Light Blue
      '#FFFFBA', // Light Yellow
      '#FFDFBA', // Light Peach
      '#E0BBE4', // Light Lavender
      '#D4F0F0', // Light Cyan
      '#FFC6FF', // Light Magenta
      '#DCEDC1', // Light Lime
      '#FFD1DC', // Light Rose
      '#C1E1C1', // Pale Green
      '#C9C9FF', // Pale Blue
      '#FAFAD2', // Light Goldenrod
      '#E6E6FA', // Lavender
      '#F0E68C'  // Khaki
    ];
  
    return colors[index % colors.length];
  };

const greedyColoringAlgorithm = (vertices: string[], edges: GraphEdge[], setColorsUsed): number[] => {
    const vertexCount = vertices.length;
    const result = Array(vertexCount).fill(-1);

    for (let u = 0; u < vertexCount; u++) {
        const available = Array(vertexCount).fill(true);

        edges.forEach(edge => {
        if (edge.from === vertices[u] || edge.to === vertices[u]) {
            const neighborIndex = edge.from === vertices[u] ? vertices.indexOf(edge.to) : vertices.indexOf(edge.from);
            if (result[neighborIndex] !== -1) {
            available[result[neighborIndex]] = false;
            }
        }
        });

        for (let cr = 0; cr < vertexCount; cr++) {
        if (available[cr]) {
            result[u] = cr;
            break;
        }
        }
    }

    setColorsUsed(new Set(result).size);
    return result;
};

export default function GreedyColoring({ vertices, edges }: GreedyColoringProps) {
  const [graph, setGraph] = useState<GraphData>({ nodes: [], edges: [] });
  const [key, setKey] = useState<number>(0);
  const [colorsUsed, setColorsUsed] = useState<number>(0); 
  
  useEffect(() => {
    const colors = greedyColoringAlgorithm(vertices, edges.map(e => ({ from: e.split('-')[0], to: e.split('-')[1] })), setColorsUsed);

    const newNodes = vertices.map((vertex, index) => ({
      id: vertex,
      label: vertex,
      color: getColorForIndex(colors[index]),
    }));

    const newEdges = edges.map(edge => {
      const [from, to] = edge.split('-');
      return { from, to };
    });

    setGraph({ nodes: newNodes, edges: newEdges });
    setKey(prevKey => prevKey + 1);

    // Disable physics after a short delay to allow initial layout
    const timer = setTimeout(() => {
    setGraph(prevGraph => ({
      ...prevGraph,
      options: {
        ...options,
        physics: { enabled: false }
      }
    }));
  }, 1000); // Adjust this delay as needed

  return () => clearTimeout(timer);
    
  }, [vertices, edges]);

  const options = {
    layout: {
      hierarchical: false,
      randomSeed: 42
    },
    edges: {
      color: "#000000",
      arrows: { to: { enabled: false } },
    },
    height: "200px",
    physics: {
      stabilization: {
        enabled: true,
        iterations: 200
      }
    }
  };

  return (
    <div>
        <h2 style={{ marginBottom: '-15px' }}>Greedy Coloring</h2>
        <p>Colors used: {colorsUsed} </p>
        <div style={{ border: '1px solid black', borderRadius: '8px', padding: '0px' }}>
            <Graph
                key={key}
                graph={graph}
                options={options}
            />
        </div>
    </div>
  );
}