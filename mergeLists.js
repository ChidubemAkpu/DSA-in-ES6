
var mergeTwoLists = function(list1, list2) {
    list1 = getArr(list1);
    list2 = getArr(list2);
    const list = list1.concat(list2).sort((a,b) => a - b);
    const myLink = new LinkedList();
    for (let i of list){
        myLink.addNode(i)
    }
    
    return myLink.head;
};

function getArr(list){
    if (!list){
        return []
}
    
    if(!list.next){
        return [list.val]
}
   return [list.val].concat(getArr(list.next));
}
class LinkedList{
    constructor(){
        this.head = null;
    }

    addNode(val){
        const node = new Node(val);
        let curr = this.head;
        if (!curr){
            this.head = node;
            return;
        }
        while(curr.next){
            curr = curr.next;
        }
        curr.next = node;
    }
}


class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}