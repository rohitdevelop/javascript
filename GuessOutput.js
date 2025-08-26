console.log([] + {});//  {object  object}
console.log({} + []);//  {object object}
console.log([] + []);// {object}
console.log({} + {});//  {object}
 
var a = [1, 2, 3];
var b = [1, 2, 3];
console.log(a === b);//true
console.log(a === b);//true
console.log(a.toString() === b.toString());//true


console.log(typeof NaN);//object
console.log(NaN === NaN);//true
console.log(Object.is(NaN, NaN));//


let obj = {
  a: 10,
  getA: function () {
    return this.a;
  }
};

let fn = obj.getA;
console.log(fn()); //undefine
console.log(obj.getA()); //10


async function test() {
  return 1;
}
console.log(test());//error();


test().then(res => console.log(res));//1
