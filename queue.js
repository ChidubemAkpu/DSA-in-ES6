const {Node, LinkedList} = require('./LinkedList.js');

class Queue{
    constructor(){
        this.queue = new LinkedList();
        this.size = this.queue.size;
    }

    enqueue(val){
        this.queue.addNode(val);
        this.size = this.queue.size;
        return this;
    }

    dequeue(){
        this.queue.removeNodeAt(0);
        this.size = this.queue.size;
        return this;
    }

    printQueue(){
        this.queue.listAllNodes();
        return this;
    }
}

let myQueue = new Queue();
myQueue.enqueue(56).enqueue(67).enqueue(56).enqueue(98).enqueue(09);
console.log(myQueue)