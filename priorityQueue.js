const {Node, LinkedList} = require('./linkedList.js');


class PriorityQueue{
    constructor(priority = PriorityQueue.ASCENDING){
        this.queue = new LinkedList();
        this.priority = priority;
    }

    enqueue(val){
        const node = new Node(val);
        let curr = this.queue.head;
        if (!curr){
            this.queue.head = node;
            return
        }
        if (this.priority === PriorityQueue.ASCENDING){
            this._ascending(node)
        } else if (this.priority === PriorityQueue.DESCENDING){
            this._descending(node)
        }else{
            return 'Wrong priority choice!!!'
        }

        
    }
    _ascending(node){
        let curr = this.queue.head;
        for (let i=0; i<this.queue.size-1; i++){
            if (curr.next.element >= node.element){
                this.queue.addNodeAt(node.element, i);
                return;
            }
            curr = curr.next;
        }
        curr.next = node;

    }

    _descending(node){
        let curr = this.queue.head;
        for (let i=0; i<this.queue.size-1; i++){
            if (curr.next.element <= node.element){
                this.queue.addNodeAt(node.element, i);
                return;
            }
            curr = curr.next;
        }
        curr.next = node;
    }

    getNodes(){
        return this.queue.listAllNodes();
    }

    }

PriorityQueue.ASCENDING = Symbol('Ascending order');
PriorityQueue.DESCENDING = Symbol('Descending order');
const theQueue = new PriorityQueue();
theQueue.enqueue(45);
theQueue.enqueue(67);