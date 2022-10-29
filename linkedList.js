'use strict'
class Node{
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    addNode(element){
        if (!this.head){
            this.head = new Node(element);
            this.size++;
            return;
        }

        let curr = this.head;
        while(curr.next){
            curr = curr.next;
        }
        curr.next = new Node(element);
        this.size++;
    }

    removeLastNode(){
        if(!this.head){
            return 'Node is empty'
            }
        
        let prev;
        let curr = this.head;
        while(curr.next){
            prev = curr;
            curr = curr.next;
        }
        if (prev){
            prev.next = null;
            this.size--;
            return;
        }
        this.head = null;
        this.size--; 
    }

    removeAll(){
        this.head = null;
        this.size = 0;
    }

    removeNodeAt(index){
        if (index >= this.size || index < 0){
            return 'Index is out of Range!!'
        } else if (index === this.size - 1){
            this.removeLastNode();
            return;
        } else if (index === 0){
            let curr = this.head;
            curr = curr.next;
            this.head = curr;
        } else {
            let prev;
            let curr = this.head;
            let pos = 0;
            while(pos < index){
                prev = curr;
                curr = curr.next;
                pos++;
            }
            prev.next = curr.next;
        }
       
        this.size--;
    }

    addNodeAt(element, index) {
        if (index == 0){
            let curr = this.head;
            let node = new Node(element);
            node.next = curr;
            this.head = node;
        } else if (index < 0 || index > this.size){
            return 'Invalid Index';
        } else if (index == this.size - 1){
            this.addNode(element)
        } else {
            let pos = 0;
            let prev; let curr = this.head;
            while(pos < index){
                prev = curr;
                curr = curr.next;
                pos++;
            }
            let node = new Node(element);
            prev.next = node;
            node.next = curr;
            
        }
        this.size++
    }
    replaceNodeAt(element, index){
        if (index < 0 || index > this.size - 1 || !this.head){
            return 'Invalid index'
        } else {
            let pos = 0;
            let curr = this.head;
            while(pos < index){
                curr = curr.next;
                pos++
            }
            curr.element = element;
        }
    }

    listAllNodes(){
        let curr = this.head;
        for (let pos = 0; pos < this.size; pos++){
            console.log(curr);
            curr = curr.next;
        }
    }

    
    reverseList(){
        let currNode = this.head;
        let nextNode = null;
        let prevNode = null;
        if (!currNode) return;

        while(currNode){
            nextNode = currNode.next;
            currNode.next = prevNode;
            prevNode = currNode;
            currNode = nextNode;
            nextNode = null
        }
        this.head = prevNode;
        return this;
    }
}

module.exports = {Node, LinkedList};




