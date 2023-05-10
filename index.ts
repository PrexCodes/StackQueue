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

let ourStack = new Stack(); //--Instance of a class

ourStack.add("Okus")
ourStack.add("Precious")
ourStack.add("Solomon")
ourStack.add("Faith")
ourStack.add("Fash")
ourStack.remove()
ourStack.remove()
ourStack.showArray()