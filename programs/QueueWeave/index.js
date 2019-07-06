const Queue = require('./queue');

function Weave(sourceOne,sourceTwo){
    const q = new Queue();

    while(sourceOne.peek() || sourceTwo.peek()){
if(sourceOne.peek()){
    q.add(sourceOne.remove())
}
if(sourceTwo.peek()){
    q.add(sourceTwo.remove())
}
    }
return q;
}

const q1 = new Queue();
q1.add(1);
q1.add(2)

const q2 = new Queue();
q2.add('hi');
q2.add('there');

const comb = Weave(q1,q2);

comb.remove();
comb.remove();
comb.remove();
comb.remove();

console.log(comb)