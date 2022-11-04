
function* gen(){
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();

console.log(g.next().value)
console.log(g.next().value)


function* iterate(array){
    for(let value of array){
        console.log(value)
    }
}

const it = iterate(['arthur', 'dick', 'hacking']);
console.log(it.next())