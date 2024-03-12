//reduce

/*const myNums = [1,2,3]

const myTotal = myNums.reduce(function(acc,currval){
    console.log(`acc : ${acc} and currval : ${currval}`);
    return acc+currval;
},2)

const myTotal =myNums.reduce((acc,currval)=>acc+currval,2)

console.log(myTotal)*/

const shoppingCart=[
    {
        itemName : "js course",
        price :2999
    },
    {
        itemName : "Python",
        price :1200
    },
    {
        itemName : "Machine",
        price :10100
    }
]

const cartTotal=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(cartTotal)