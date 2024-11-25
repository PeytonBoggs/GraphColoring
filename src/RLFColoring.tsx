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

  const rlfColoringAlgorithm = (vertices: string[], edges: GraphEdge[], setColorsUsed): number[] => {
    const vertexCount = vertices.length;
    const result = Array(vertexCount).fill(-1);
    const adjacencyList: Map<string, Set<string>> = new Map();

    // Initialize adjacency list
    vertices.forEach(v => adjacencyList.set(v, new Set()));
    edges.forEach(edge => {
        adjacencyList.get(edge.from)!.add(edge.to);
        adjacencyList.get(edge.to)!.add(edge.from);
    });

    const getUncoloredVertices = () => vertices.filter((_, i) => result[i] === -1);
    const getDegree = (vertex: string) => adjacencyList.get(vertex)!.size;

    const colorClass = (color: number, uncolored: string[]) => {
        if (uncolored.length === 0) return;

        // Find vertex with maximum degree
        let maxDegreeVertex = uncolored[0];
        uncolored.forEach(v => {
            if (getDegree(v) > getDegree(maxDegreeVertex)) {
                maxDegreeVertex = v;
            }
        });

        // Color the max degree vertex
        result[vertices.indexOf(maxDegreeVertex)] = color;

        // Remove colored vertex and its neighbors from uncolored
        const newUncolored = uncolored.filter(v => 
            v !== maxDegreeVertex && !adjacencyList.get(maxDegreeVertex)!.has(v)
        );

        // Recursively color the remaining vertices
        colorClass(color, newUncolored);
    };

    let color = 0;
    while (getUncoloredVertices().length > 0) {
        colorClass(color, getUncoloredVertices());
        color++;
    }

    setColorsUsed(color);
    return result;
};

export default function RLFColoring({ vertices, edges }: GreedyColoringProps) {
  const [graph, setGraph] = useState<GraphData>({ nodes: [], edges: [] });
  const [key, setKey] = useState<number>(0);
  const [colorsUsed, setColorsUsed] = useState<number>(0); 
  
  useEffect(() => {
    const colors = rlfColoringAlgorithm(vertices, edges.map(e => ({ from: e.split('-')[0], to: e.split('-')[1] })), setColorsUsed);

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
        <h2 style={{ marginBottom: '-15px' }}>Recursive Largest First Coloring</h2>
        <p>Colors used: {colorsUsed} </p>
        <div style={{ backgroundColor: 'white', border: '1px solid black', borderRadius: '8px', padding: '0px' }}>
            <Graph
                key={key}
                graph={graph}
                options={options}
            />
        </div>
    </div>
  );
}