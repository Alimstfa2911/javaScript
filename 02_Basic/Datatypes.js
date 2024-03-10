// Based on how data has been allocated in the memory

// Primitive
// 7 types - String , Boolean, Number, null, undefined , Symbol, BigInt
// Reference (Non primitive)
//Array, Object ,Function

//Is JavaScript a static or dynamic type? dynamically typed language JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them

/*const score = false
const scoreVsl = 1100.2

const isLoggedIn = false
const outsideTemp = null

const id = Symbol("123");
const otherId = Symbol("123")

console.log(id===otherId)

const BigNumber = 2547896412n

console.log(typeof(BigNumber))*/

const heros = ["shaktiman","nagraj"]
let myObj = {
    name : "mustafa",
    age : "23"
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myObj);

