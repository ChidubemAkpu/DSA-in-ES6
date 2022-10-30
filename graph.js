const {Queue} = require('./queue.js')
class Node{
    constructor(value) {
        this.value = value;
        this.adjacents = new Set();
    }

    adjacentNode(node){
        this.adjacents.add(node);
    }

    removeAdjacent(node){
        this.adjacents.delete(node)
    }

    isAdjacent(node){
        return this.adjacents.has(node)
    }

    getAdjacents(){
        return this.adjacents;
    }

}

class Graph{
    constructor(edgeDirection = Graph.DIRECTED){
        this.nodes = new Map();
        this.size = this.nodes.size;
        this.edgeDirection = edgeDirection;
    }

    addVertex(value){
        if (this.nodes.has(value)){
            return this.nodes.get(value)
        }
        const vertex = new Node(value);
        this.nodes.set(value, vertex);
        this.size = this.nodes.size;
        return this.nodes.get(value)
    }

    addEdge(source, destination){
        const sourceNode = this.addVertex(source);
        const destinationNode = this.addVertex(destination);
        sourceNode.adjacentNode(destination);
        if (this.edgeDirection === Graph.UNDIRECTED){
            destinationNode.adjacentNode(source);
        }
        this.size = this.nodes.size;

    }

    removeVertex(node){
        for (let eachNode of this.nodes.values()){
            eachNode.removeAdjacent(node);
        }
        this.nodes.delete(node);
        this.size = this.nodes.size;
    }

    removeEdge(source, destination){
        const sourceNode = this.nodes.get(source);
        const destinationNode = this.nodes.get(destination);
        sourceNode.removeAdjacent(destination);
        if (this.edgeDirection === Graph.UNDIRECTED){
            destinationNode.removeAdjacent(source);
        }
        this.size = this.nodes.size;
        return 'Removed!!!'
    }

    *bfs(first){
        const visited = new Map();
        const visitList = new Queue();
        
        visitList.enqueue(first);
        while(!visitList.isEmpty()){
            const dequeuedItem = visitList.dequeue();
            if(!visited.has(dequeuedItem)){
                yield dequeuedItem;
                visited.set(dequeuedItem, true);
                Array.from(this.nodes.get(dequeuedItem).adjacents).forEach(adj => visitList.enqueue(adj));
            }
            
        }
}

}

Graph.UNDIRECTED = Symbol('undirected graph');
Graph.DIRECTED = Symbol('directed graph');


const graph = new Graph(Graph.UNDIRECTED);
graph.addEdge('Dubem', 'Chialuka');
graph.addEdge('Chinyere', 'OlisaEmeka');
graph.addEdge('Chuks', 'Chinyere');
graph.addEdge('Chisom', 'Prosper');


let theSearch = graph.bfs('Dubem');
console.log(theSearch.next());
console.log(theSearch.next());
console.log(theSearch.next());

