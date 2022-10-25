class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    
    addNode(name){
        if (!this.adjacencyList[name]){
            this.adjacencyList[name] = new Set();
        } else {
            return 'Already exists!!'
        }
        
    }
    
    addEdge(source, dest){
        if (!this.adjacencyList[source]) {
            this.addNode(source);
        }
        if (!this.adjacencyList[dest]){
            this.addNode(dest);
        }
        this.adjacencyList[source].add(dest);
        this.adjacencyList[dest].add(source)
    }

    removeEdge(source, dest){
        this.adjacencyList[source].delete(dest);
        this.adjacencyList[dest].delete(source);
    }

    removeNode(node){
        for (let eachItem of this.adjacencyList[node]){
            this.removeEdge(node, eachItem)
        }
        delete this.adjacencyList[node];
    }

    bfs(start){
        const queue = [start];
        const result = [];
        const visited = {};
        visited[start] = true;
        let currNode;
        while(queue.length){
            currNode = queue.shift();
            result.push(currNode);
            this.adjacencyList[currNode].forEach(neighbour => {
                if (!visited[neighbour]) {
                    visited[neighbour] = true;
                    queue.push(neighbour)
                }
            })
        }
        return result;
    }
}

const NodeObj = {}
function returnNode(node){
    NodeObj[node.val] = [];
    for (let prop of node.neighbors){
        NodeObj[node.val].push(prop.val);
        returnNode(prop);
    }
    console.log(NodeObj);
}

console.log(returnNode())
