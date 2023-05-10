//stack - first in last out principle
class Stack{

    stackeditems: any[]
    constructor(){
        this.stackeditems = []
    }

    add(name){
        this.stackeditems.push(name)        
    }
    remove(){
        this.stackeditems.pop()
    }

    showArray(){
        console.log(this.stackeditems);
        
    }
}

// let ourStack = new Stack(); //--Instance of a class

// ourStack.add("Okus")
// ourStack.add("Precious")
// ourStack.add("Solomon")
// ourStack.add("Faith")
// ourStack.add("Fash")
// ourStack.remove()
// ourStack.remove()
// ourStack.showArray()


//for queues - firstin firstout principle
class Queues{

    queue: Array<any>
    constructor(){
        this.queue = []
    }

    add(item){
        this.queue.push(item)
    }
    remove(){
        this.queue.shift()
    }
    showArray(){
        console.log(this.queue)
    }
}

let queue = new Queues()
queue.add('Faith')
queue.add('Spirit')
queue.add('Oil')
queue.add('Groceries')
queue.add('Don')
queue.add('Faith')
queue.remove()
queue.remove()
queue.remove()
queue.showArray()