//object literal
const user={
    username:"parth",
    loginCount:8,
    signIn:true,

    getUserDetails: function(){
        console.log("got user details from DB");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}
//console.log(user.username);
//console.log(user.getUserDetails());

// constructor function--- new keyword->new context banane me kaam ata hai

// const promiseOne=new Promise();
// const date=new Date();

function userT(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this;
}
// const userOne= userT("parth",12,true);
// const userTwo=userT("hitesh",13,false);
// console.log(userOne);
//yaha userTwo overwrite kardega userOne ki values so when 
// u print userOne we get details of userTwo

// therefore use new keyword
// new object create hoga 
const userOne= new userT("parth",12,true);
const userTwo=new userT("hitesh",13,false);
console.log(userOne);
console.log(userTwo.constructor);

// instanceof method---tells if two objects are of diff instance 