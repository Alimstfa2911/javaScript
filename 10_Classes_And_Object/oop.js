const user = {
    username : "hitesh",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        console.log(`Username : ${this.username}`);
        //console.log("Got user detail from database");
    }
}

console.log(user.username);
console.log(user.getUserDetails());

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this

}

const userOne = new User("hitesh",12,true)
const userTwo = new User("Chai",11,false)
console.log(userOne);
console.log(userTwo)