const Stack = require('./stack')

class Queue {

constructor(){
    this.first = new Stack();
    this.second = new Stack();
}

add(record){
    this.first.push(record);
}

remove(){

    while(this.first.peek()){
this.second.push(this.first.pop());        
    }

    const record = this.second.pop();

while(this.second.peek()){
this.first.push(this.second.pop());        
    }
    return record;
}

peek(){
    while(this.first.peek()){
        this.second.push(this.first.pop());      
            }
            const record = this.second.peek();

            while(this.second.peek()){
                this.first.push(this.second.pop());        
                    }

                    return record;

}

}


const q = new Queue();

q.add(1)

q.add(2)
console.log(q);
q.peek()
console.log(q);
q.remove()
console.log(q);
q.remove()
console.log(q);
