const promiseOne= new Promise(function(resolve,reject){
    // do an async task
    //DB calls, cryptography,network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    },1000)
});

//.then() related to resolve()
promiseOne.then(function(){
    console.log("Promise consumed");
});
// hamesha async task complete pehle ayega then wo resolve hoga fir 
// hi promise consumed print hoga that is .then() func

//another way
new Promise(function(resolve,reject){
    setTimeout(function() {
        console.log("Async task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

//
const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function() {
        resolve({username:"Chai",email:"chai@example.com"})
    }, 1000);
})
promiseThree.then(function(user){
    console.log(user);
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false; //true-> error:something went wrong
        if(!error){
            resolve({username:"itesh", password:"123"});
        }
        else{
            reject('ERROR:Something went wrong');
        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username;
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(()=> console.log("The promise is either resolved or rejected"))
//finally wala to hamesha chalta hi hai

//now another method using async await
const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false; //true-> error:something went wrong
        if(!error){
            resolve({username:"javascript", password:"123"});
        }
        else{
            reject('ERROR:Js went wrong');
        }
    },1000)
})

async function consumePromiseFive(){
    try{
        const response=await promiseFive;
        console.log(response);
    } catch(error){
        console.log(error);
    }
} 
consumePromiseFive();
// async await directly cannot handle errors 
//yaha upar if we put error as false then badhiya chalega and will retrun user details
// but if error true karege to error ayega so try catch me likhege jisse error handle hojaye
    
async function getAllUsers(){
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
        const data= await response.json()
        console.log(data)
    }
    catch(error){
        console.log("E: ",error); 
    }
}

getAllUsers();

// same thing using .then()
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})

// promise.all

// ****---note---**** 