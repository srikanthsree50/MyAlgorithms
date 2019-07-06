class Queue {
    constructor(){
this.data = [];
    }
    add(record){
        this.data.unshift(record);
    }
    remove(){
        return this.data.pop();
    }
}

const q = new Queue();
q.add(10);
q.add(20);
q.add(30);
console.log(q)
q.remove(20);
console.log(q)