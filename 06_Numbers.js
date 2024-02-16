const score = 100;
console.log(score)

const balance = new Number(100)
console.log(balance)
console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherName = 123.89654
console.log(otherName.toPrecision(4))

const hundred = 10000000;
console.log(hundred.toLocaleString('en-IN'))

console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MAX_SAFE_INTEGER)

// *******************MATHS **************//

console.log(Math.SQRT1_2);
console.log(Math.abs(-4));
console.log(Math.round(4.9));
console.log(Math.floor(4.9));
console.log(Math.random());
console.log(Math.random()*10+1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min));