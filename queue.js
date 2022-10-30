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
        this.size = this.queue.size;
        return this.queue.removeNodeAt(0);
    }

    printQueue(){
        this.queue.listAllNodes();
        return this;
    }

    isEmpty(){
        return !Boolean(this.size);
    }
}


module.exports = {Queue};
