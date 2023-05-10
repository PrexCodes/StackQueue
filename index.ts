//stack is a list of items arranged in first in last out order, last in first out order

class Stack{
    stack: Array<any>
    constructor(){
        this.stack = []
    }

    add(item){
        this.stack.push(item)
    }
    remove(){
        this.stack.pop()
    }
    showItem(){
        console.log(this.stack);
        
    }
}

let myStack = new Stack()
// myStack.add('Precious')
// myStack.add('Don')
// myStack.add('Ehiabhi')
// myStack.add('Samuel')
// myStack.showItem()

// myStack.remove()
// myStack.showItem()

//queue - it is a list of items or a data structure with the first in first ouy principle
class Queue{
    queue: any[]
    constructor(){
        this.queue = []
    }

    add(item: any){
        this.queue.push(item)
    }
    remove(){
        this.queue.shift()
    }
    showItems(){
        console.log(this.queue)
    }
}

let myQueue = new Queue()
myQueue.add('A')
myQueue.add('B')
myQueue.add('C')
myQueue.add('D')
myQueue.add('E')
myQueue.remove()
myQueue.remove()
myQueue.remove()
myQueue.showItems()