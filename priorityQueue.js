const {Queue} = require('./queue.js');

class PriorityQueue extends Queue{
    constructor(priority = PriorityQueue.ASCENDING){
        super(priority);
        this.priority = priority;
    }

    dequeueSetOrder(){
        let theSize  = this.queue.size;
        if (theSize ==0 || theSize == 1){
            return this.queue.head;
        }
        let curr = this.queue.head;
        let prev;
        let comparer = curr.next;
        let comparerPrev = curr;
        if (this.priority == PriorityQueue.ASCENDING){
            while(comparer){
                if(comparer.element < curr.element){
                    curr = comparer;
                    prev = comparerPrev;
                }
                comparerPrev = comparer;
                comparer = comparer.next;
            }
            if (!prev){
                this.queue.removeNodeAt(0);
             } else if (!curr.next){
                this.queue.removeLastNode();
             } else {
                prev.next = curr.next;
                this.queue.size--;
             }
             return curr.element;
        } else if (this.priority == PriorityQueue.DESCENDING){
             while(comparer){
                if(comparer.element > curr.element){
                    curr = comparer;
                    prev = comparerPrev;
                }
                comparerPrev = comparer;
                comparer = comparer.next;
             }
             if (!prev){
                this.queue.removeNodeAt(0);
             } else if (!curr.next){
                this.queue.removeLastNode();
             } else {
                prev.next = curr.next;
                this.queue.size--;
             }
             return curr.element;
        }
    }
}

PriorityQueue.ASCENDING = Symbol('Ascending order');
PriorityQueue.DESCENDING = Symbol('Descending order');
let ascendingOrder = PriorityQueue.ASCENDING;
let descendingOrder = PriorityQueue.DESCENDING;

const myQueue = new PriorityQueue(descendingOrder);

myQueue.enqueue(89);
myQueue.enqueue(90);
myQueue.enqueue(120)
myQueue.enqueue(45);
myQueue.enqueue(67);
myQueue.enqueue(230);
myQueue.enqueue(10);


console.log(myQueue.dequeueSetOrder());
console.log(myQueue.dequeueSetOrder())

