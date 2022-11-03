const {Node, LinkedList} = require('./linkedList.js');


class PriorityQueue{
    constructor(priority = PriorityQueue.ASCENDING){
        this.queue = new LinkedList();
        this.priority = priority;
        this.size = this.queue.size;
    }

    enqueue(val){
        const node = new Node(val);
        let curr = this.queue.head;
        if(!curr){
            this.queue.addNode(val)
            this.size = this.queue.size;
            return;
        }
    
            if (this.priority == PriorityQueue.ASCENDING){
                for (let i=0; i<this.size; i++){
                    if(curr.element >= node.element){
                        this.queue.addNodeAt(val, i);
                        this.size = this.queue.size;
                        return;
                    }
                    curr = curr.next;
                }
                this.queue.addNode(val);
                this.size = this.queue.size;
            } else if (this.priority == PriorityQueue.DESCENDING){
                for(let i=0; i<this.size; i++){
                    if(curr.element <= node.element){
                        this.queue.addNodeAt(val, i);
                        this.size = this.queue.size;
                        return;
                    }
                    curr = curr.next;      
                }
                this.queue.addNode(val);
                this.size = this.queue.size;
            }
        
    }

    getNodes(){
        return this.queue.listAllNodes();
    }
}

PriorityQueue.ASCENDING = Symbol('Ascending order');
PriorityQueue.DESCENDING = Symbol('Descending order');