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

interface Individual {
    coloring: number[];
    fitness: number;
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

const geneticColoringAlgorithm = (vertices: string[], edges: GraphEdge[], setColorsUsed): number[] => {
  const vertexCount = vertices.length;
  const adjacencyList: Map<string, Set<string>> = new Map();
  let bestFitness = Infinity;
  let stagnationCount = 0;
  const maxStagnationGenerations = 10000;
  const populationSize = 1000;

  // Initialize adjacency list
  vertices.forEach(v => adjacencyList.set(v, new Set()));
  edges.forEach(edge => {
      adjacencyList.get(edge.from)!.add(edge.to);
      adjacencyList.get(edge.to)!.add(edge.from);
  });

  // Generate a random individual
  const generateIndividual = (): Individual => {
      const coloring = Array(vertexCount).fill(0).map(() => Math.floor(Math.random() * vertexCount));
      return { coloring, fitness: calculateFitness(coloring) };
  };

  // Calculate fitness (lower is better)
  const calculateFitness = (coloring: number[]): number => {
    let conflicts = 0;
    edges.forEach(edge => {
        const fromIndex = vertices.indexOf(edge.from);
        const toIndex = vertices.indexOf(edge.to);
        if (coloring[fromIndex] === coloring[toIndex]) {
            conflicts++;
        }
    });
    const numColors = new Set(coloring).size;
    const maxColors = vertices.length;
    
    return conflicts * 1000 + (numColors / maxColors);
  };
  
  // Crossover two parents to produce a child
  const crossover = (parent1: Individual, parent2: Individual): Individual => {
      const crossoverPoint = Math.floor(Math.random() * vertexCount);
      const childColoring = [...parent1.coloring.slice(0, crossoverPoint), ...parent2.coloring.slice(crossoverPoint)];
      return { coloring: childColoring, fitness: calculateFitness(childColoring) };
  };

  // Mutate an individual
  const mutate = (individual: Individual): Individual => {
      const mutatedColoring = [...individual.coloring];
      const mutationPoint = Math.floor(Math.random() * vertexCount);
      mutatedColoring[mutationPoint] = Math.floor(Math.random() * vertexCount);
      return { coloring: mutatedColoring, fitness: calculateFitness(mutatedColoring) };
  };

  // Initialize population
  let population = Array(populationSize).fill(null).map(generateIndividual);

  // Main genetic algorithm loop
  while (stagnationCount < maxStagnationGenerations) {
    // Sort population by fitness (ascending order)
    population.sort((a, b) => a.fitness - b.fitness);

    // Check if we have a valid solution
    if (population[0].fitness < 1000) {
        setColorsUsed(new Set(population[0].coloring).size);
        return population[0].coloring;
    }

    // Update best fitness and stagnation count
    const currentBestFitness = population[0].fitness;
    if (currentBestFitness < bestFitness) {
        bestFitness = currentBestFitness;
        stagnationCount = 0;
    } else {
        stagnationCount++;
    }

    // Select top half as parents
    const parents = population.slice(0, populationSize / 2);

    // Create new population
    const newPopulation: Individual[] = [...parents];

    while (newPopulation.length < populationSize) {
        const parent1 = parents[Math.floor(Math.random() * parents.length)];
        const parent2 = parents[Math.floor(Math.random() * parents.length)];
        let child = crossover(parent1, parent2);

        const baseMutationRate = 0.1;
        const mutationRate = baseMutationRate + (stagnationCount / maxStagnationGenerations) * 0.2;

        // Apply mutation
        if (Math.random() < mutationRate) {
            child = mutate(child);
        }

        newPopulation.push(child);
    }

    population = newPopulation;
  }

  // Select the best individual
  population.sort((a, b) => a.fitness - b.fitness);
  const bestColoring = population[0].coloring;

  setColorsUsed(new Set(bestColoring).size);
  return bestColoring;
};

export default function GeneticColoring({ vertices, edges }: GreedyColoringProps) {
  const [graph, setGraph] = useState<GraphData>({ nodes: [], edges: [] });
  const [key, setKey] = useState<number>(0);
  const [colorsUsed, setColorsUsed] = useState<number>(0); 
  
  useEffect(() => {
    const colors = geneticColoringAlgorithm(vertices, edges.map(e => ({ from: e.split('-')[0], to: e.split('-')[1] })), setColorsUsed);

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
  }, 1000);

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
        <h2 style={{ marginBottom: '-15px' }}>Genetic Coloring</h2>
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