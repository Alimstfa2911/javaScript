/*const coding = ["js","ruby","java","python","cpp"]

const values = coding.forEach((item)=>{
    //console.log(item);
    return item
})

console.log(values);
forEach return undefined*/

//const myNums=[1,2,3,4,5,6,7,8,9,10]
//const newNums=myNums.filter((num)=> num>4) implicit return
/*const newNums=myNums.filter((num)=> {
   return num>4
   //explicit return
})
console.log(newNums);*/

/*const newNums = []

myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})

console.log(newNums)*/

const books = [
    {
        title : 'Book one' , genre:'Fiction',publish:2021,
        edition:2004
    },
    {
        title : 'Book two' , genre:'Non-Fiction',publish:1982,
        edition:1984
    },
    {
        title : 'Book three' , genre:'History',publish:2004,
        edition:2014
    },
    {
        title : 'Book four' , genre:'Fiction',publish:1981,
        edition:1998
    },
]

//const userBooks = books.filter((bk)=>bk.edition===2004)
//let userBooks=books.filter((bk)=>bk.publish>2000)
let userBooks=books.filter((bk)=>{ 
    return bk.publish>2000 && bk.genre==='History'
})

console.log(userBooks);