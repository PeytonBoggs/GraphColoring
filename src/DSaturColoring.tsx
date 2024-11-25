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

interface VertexInfo {
    name: string;
    saturationDegree: number;
    uncoloredDegree: number;
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


  
const dsaturColoringAlgorithm = (vertices: string[], edges: GraphEdge[], setColorsUsed): number[] => {
    const vertexCount = vertices.length;
    const result = Array(vertexCount).fill(-1);
    const adjacencyList: Map<string, Set<string>> = new Map();
    const saturationDegrees: Map<string, Set<number>> = new Map();
  
    // Initialize adjacency list and saturation degrees
    vertices.forEach(v => {
      adjacencyList.set(v, new Set());
      saturationDegrees.set(v, new Set());
    });
  
    edges.forEach(edge => {
      adjacencyList.get(edge.from)!.add(edge.to);
      adjacencyList.get(edge.to)!.add(edge.from);
    });
  
    const getNextVertex = (): VertexInfo | null => {
      let maxSaturation = -1;
      let maxDegree = -1;
      let selectedVertex: VertexInfo | null = null;
  
      vertices.forEach((v, index) => {
        if (result[index] === -1) {
          const saturation = saturationDegrees.get(v)!.size;
          const degree = adjacencyList.get(v)!.size;
          if (saturation > maxSaturation || (saturation === maxSaturation && degree > maxDegree)) {
            maxSaturation = saturation;
            maxDegree = degree;
            selectedVertex = { name: v, saturationDegree: saturation, uncoloredDegree: degree };
          }
        }
      });
  
      return selectedVertex;
    };
  
    const updateSaturationDegrees = (vertex: string, color: number) => {
      adjacencyList.get(vertex)!.forEach(neighbor => {
        if (result[vertices.indexOf(neighbor)] === -1) {
          saturationDegrees.get(neighbor)!.add(color);
        }
      });
    };
  
    // Main DSatur algorithm loop
    for (let i = 0; i < vertexCount; i++) {
      const nextVertex = getNextVertex();
      if (!nextVertex) break;
  
      const vertexIndex = vertices.indexOf(nextVertex.name);
      const availableColors = new Set(Array.from({ length: vertexCount }, (_, i) => i));
  
      adjacencyList.get(nextVertex.name)!.forEach(neighbor => {
        const neighborColor = result[vertices.indexOf(neighbor)];
        if (neighborColor !== -1) {
          availableColors.delete(neighborColor);
        }
      });
  
      const chosenColor = Math.min(...availableColors);
      result[vertexIndex] = chosenColor;
      updateSaturationDegrees(nextVertex.name, chosenColor);
    }
    
    setColorsUsed(new Set(result).size);
    return result;
};

export default function DSaturColoring({ vertices, edges }: GreedyColoringProps) {
    const [graph, setGraph] = useState<GraphData>({ nodes: [], edges: [] });
    const [key, setKey] = useState<number>(0);
    const [colorsUsed, setColorsUsed] = useState<number>(0); 
    
    useEffect(() => {
      const colors = dsaturColoringAlgorithm(vertices, edges.map(e => ({ from: e.split('-')[0], to: e.split('-')[1] })), setColorsUsed);
  
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
            <h2 style={{ marginBottom: '-15px' }}>DSatur Coloring</h2>
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