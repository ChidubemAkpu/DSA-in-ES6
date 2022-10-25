

 var addTwoNumbers = function(l1, l2) {
    l1 = getNumbers(l1);
    l2 = getNumbers(l2);
    let theArr = [l1, l2];
    theArr = theArr.map(a => {
        if (a.length > 1){
            return BigInt(a.split('').reverse().join(''));
}
        return BigInt(a)
})
    theArr = theArr[0] + theArr[1];
    theArr = String(theArr).split('').reverse().join('');
    const theLink = new LinkedList()
    for(let i of theArr){
        theLink.addNode(+i);
}
    return theLink.head;
}

function getNumbers(theList){
    if(!theList.next){
        return theList.val + '';
}
    
    return '' + theList.val + getNumbers(theList.next)
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

console.log([45, 678, 789, 45].concat([]))



    
   
    

