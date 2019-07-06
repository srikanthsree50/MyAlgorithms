class stack{
    constructor(){
        this.data = [];
    }
        push(record){
            this.data.push(record);
        }
        pop(){
return this.data.pop()
        }
    peek(){
        return this.data[this.data.length-1];
    }
}

const s = new stack();
s.push(1);
s.push(2);
console.log(s);
s.pop();
console.log(s);
s.pop();

console.log(s);