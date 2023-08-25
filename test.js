const fun = prod => console.log(prod);
const arr = [1,2,3];
const p = arr.map(elem => elem*2)
const q = arr.map((elem)=>{
    elem*2;
})

const r = arr.map((elem)=>{
    return elem*3;
})

const s = arr.map((elem)=>{
    return 1;
})

console.log(p, q, r, s);