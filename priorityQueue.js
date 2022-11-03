const {Queue} = require('./queue.js');

class PriorityQueue extends Queue{
    
    dequeueAscending(){
        if (this.queue.head == null){
            return
        }
        let curr = this.queue.head;
        let checkerPrev = curr;
        let checker = curr.next;
        let prev;
        while(checker){
            if(checker.element < curr.element){
                curr = checker;
                prev = checkerPrev;
            }
            checkerPrev = checker;
            checker = checker.next;
        }
        if(curr.next == null){
            prev.next = null;
            console.log(curr);
            return;
        }
        prev.next = curr.next;
        console.log(curr)
}
}
let p = new PriorityQueue();
