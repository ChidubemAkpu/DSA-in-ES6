class Node{
	constructor(val){
		this.val = val;
		this.prev = null;
		this.next = null;
	}
}
class DoublyLinkedList{
	constructor(){
		this.head = null;
		this.size = 0;
	}

	addNode(val){
		const node = new Node(val);
		let curr = this.head;
		let prev;
		this.size++;
		if(!curr){
			this.head = node;
			return;
		}
		while(curr.next){
			prev = curr;
			curr = curr.next;
		}
		curr.next = node;
		node.prev = curr;
	}

	printNodes(){
		if (this.size == 1){
			console.log(this.head);
		}
		let curr = this.head;
		while(curr){
			console.log(curr);
			curr = curr.next;

		}

	}
}
