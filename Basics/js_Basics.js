// // line below is used to print on console window
// console.log("Namaste duniya verion 3"); 
// let a=5;
// console.log(a);
// let Name='parth';
// console.log(Name);

// let lastName=3;
// console.log(lastName);

// lastName=true;
// console.log(lastName);
// //ternary operator
// let age=17;
// let status=(age>=18) ? 'Yes Vote' : 'No Vote';

// let marks=98;
// if(marks>=90)
// {
//     console.log('A');
// }
// else if(marks>=80)
// {
//     console.log('B');
// }

// else if(marks>=70)
// {
//     console.log('C');
// }
// else{
//     console.log('D');
// }
// //switch case
// let num=2;
// switch(num)
// {
//     case 1: console.log('A');
//     break;
//     case 2: console.log('B');
//     break;
//     case 3: console.log('C');
//     break;
// }
// //do-while loop
// let y=1;
// do{
//     console.log(y);
//     y++;
// } while(y<10);

//console.table([lastName,marks,num]);  //isse ek table bana sakte and ek sath print kara sakta 

// JS BASICS LEC-2:


// console.log('chaliye shuru karte hai');
//object create
// let rectangle={
//     length:1,
//     breadth:2,

//     draw:function()
//     {
//         console.log('drawing rectangle');
//     }
// };

//factory function

// function createRectangle(len,bre){

//     return rectangle={
//         length:len,
//         breadth:bre,
    
//         draw:function()
//         {
//             console.log('drawing rectangle');
//         }
//     };
   
// }
// let rectangleObj1= createRectangle(5,4);
//camel case-> numberOfStudents
// constructor function -> Pascal Notation->first letter of evry word is capital->NumberOfStudents
// constructor function ->prep/methods-> initialise/define

// function Rectangle(len,bre){
//     this.length=len;
//     this.breadth=bre;
//     this.draw=function(){
//         console.log('drwaing');
//     }
// }
//object creation using constructor function 
// let rectangleObject= new Rectangle(3,8);

// add new property in object--dynamic nature of object
// rectangleObject.color= 'yellow';
// console.log(rectangleObject);
// //remove any property from object
// delete rectangleObject.color;
// console.log(rectangleObject);

//in built constructor kese kam karta uske liye Function banaya(not imp)
// let Rectangle1=new Function(
//     'length','breadth',
//     `this.length=length;
//     this.breadth=breadth;
//     this.draw=function(){
//         console.log('drwaing');
//     }`);
//     //object creation using rectangle1
//     let rect= new Rectangle1(2,3);
//     console.log(rect);

// //pass by value
// let ab =10;
// function inc(ab){ab++;}
// inc(ab)
// console.log(ab);

// //pass by reference

// let abc={value:10};
// function incr(abc){abc++;}
// incr(abc);
// console.log(abc);

//  let rectangle={
//     length:2,
//      breadth:4   
//  };
// //for-in loop
// for(let key in rectangle){
//     //keys are reflected through key vriable and value through rectangle[key]
//     console.log(key,rectangle[key]);
// }

//for-of loop
//this will give error in objects 
//for(let key of rectangle)
// {
//     console.log(key)
// }

//so for objects u can create an array of object and use for-of

// for(let key of Object.entries(rectangle))
//     {
//         console.log(key)
//     }

// if('color' in rectangle){
//     console.log('Present');
// }
// else{
//     console.log('Absent');
// }


//dates 

// let myDate = new Date();
// console.log(myDate.toString());
// console,log(myDate.toDateString());
// console.log(myDate.toLocaleString());

//specific date

// let myCreatedDate= new Date(2023,0,23);
// console,log(myCreatedDate.toDateString());

// let myCreateDate= new Date(2023,0,23,5,3);
// console,log(myCreateDate.toLocaleString());

//time

// let myTimeStamp=Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());



//object cloning

// #1->iteration

// let src={
//     a:10,
//     b:20,
//     c:30,
// };

// let dest={};

// for(let key in src){
//     dest[key]=src[key];
// }
// console.log(dest);
// src.a++;
// console.log(dest);//to yaha dest me a ki value purani hi rahegi kyuki clone kiya hai

// #2 assign

// let src={
//     a:10,
//     b:20,
//     c:30,
// };

// let src2={value:25};
// let dest= Object.assign({},src,src2);
// console.log(dest);

// src.a++;
// console.log(dest);

// #3  spread

// let src={
//     a:10,
//     b:20,
//     c:30,
// }        
// let dest={...src};
// console.log(dest);

// src.a++;
// console.log(dest);



// JS BASICS LEC-3:


//primitive type string
// let lastName='pandey';
  
// //object type string
// let firstName= new String('Parth');

// let message='This is my first message';
// let words =message.split(' ');
// console.log(words);

// Template literal
// let message1=
// `Hello Parth,

// Thanks for the Opprtunity

// Regards,
// Pandey.`

// Arrays

//primitives

// let numbers=[1,4,5,7];
// console.log(numbers);
// //  numbers.push(9)->add element at end
// // numbers.unshift(8)->insert at begin
// // numbers.splice(2,0,'a','b','c','d') at index-2 a,b,c,d ajayege and 0-deleted elements

// console.log(numbers.indexOf(9));

// //we want to check if a number exist in an array
// if(numbers.indexOf(9)!=-1)
//     console.log("present");

// console.log(numbers.includes(7)); // returns true or false

// console.log(numbers.indexOf(4,2)); // search start after 2nd index

// Object type array

// let courses=[
//     {no:1, naam:'Parth'},
//     {no:2, naam:'Rahul'},
// ];

// console.log(courses);
// //for object indexOf and includes does not work

// let course=courses.find(course => course.naam =='Parth');
// console.log(course);

//removing element

// let numbers=[1,2,3,4,5,6,7];

// numbers.pop();
// numbers.shift(); // remove from begin
// numbers.splice(3,1); // remove from middle

// emptying an array

// let numbers=[1,2,3,4,5,6,7];
// let numbers2=numbers;

//numbers=[]; isme numbers->empty hojayega but numbers2 nqi hoga
// numbers.length=0; //correct way isme numbers and numbers2 dono empty hojayege
//another way -> numbers.splice(0,numbers.length);
// console.log(numbers);
// console.log(numbers2);

//combining array
// let first=[1,2,3];
// let second=[4,5,6];

// let combined=first.concat(second);
// console.log(combined);

// //slicing

// let marks=[10,20,30,40,50,60,70,80]
// let sliced=marks.slice(2,6); // (start,end)
// console.log(sliced);


//use of array-from operator

// console.log(Array.isArray("Hitesh"));
// console.log(Array.from("Hitesh"));
// console.log(Array.from({name: "Hitesh"}));

// use of array-of operator

// let s1=30;
// let s2=40;
// let s3=50;
// console.log(Array.of(s1,s2,s3));


// Spread operator(co mbine array)

// let first=[1,2,3];
// let second=[4,5,6];

// let combined= [...first, 'a', ...second, 'b', true];
// console.log(combined);


// flat operator-- return a new array with all sub array elements concated into it recursively
// upto specified depth //flat(depth) -->>depth is number of nested arrays here max nested level is 2

// const another_arr=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
// const real_arr= another_arr.flat(4);
// console.log(real_arr);


// //to create copy
// let another=[...combined];

// iterating an array

// let arr=[10,20,30,40,50];
// //for-of loop
// for(let value of arr){
//     console.log(value);
// }
// // for-each loop
// arr.forEach(number => console.log(number));

// joining arrays

// let numbers=[10,20,30,40,50];
// const joined=numbers.join(',');

// console.log(joined);

// split 

// let message='this is my first message';
// let parts=message.split(' ');
// console.log(parts); 

// filtering arrays

// let numbers=[1,2,-1,-4];

//  let filtered= numbers.filter(value => value>=0);
//  console.log(filtered);

// mapping arrays

// let numbers=[7,8,9,10];

// let items = numbers.map(value => 'student_no' + value);
// console.log(items);

// mapping with objects

// let numbers=[1,2,-6,-9];
// let filtered=numbers.filter(value => value>=0);

// let items=filtered.map(function(num){
//     return {value: num};
// });
// console.log(items);

// or in a single line

// let numbers=[1,2,-6,-9];

// let items=numbers.filter(value => value>=0).map(num => {value: num});
// console.log(items);
  

// JS BASICS CLASS-4   

// #Function->

// run();

// function run(){
//     console.log('running');
// }

// // named function assignment
// let stand= function walk(){
//     console.log('walking');
// };
// stand();

// // anonymous function assignment

// let stand2= function(){
//     console.log('walking');
// };

// stand2();

// let jump= stand;
// jump();

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(1,2)); // ->3
// console.log(sum(1)); // -> NaN(not a number) kyuki 1 ko undef ke sath add karaya
// console.log(sum(1,2,3,4,5)); // ->3

// argument use
// function sum(a,b){
//     console.log(arguments);
//     return a+b;
// }
// let ans= sum(1,2); 

// dynamic function create kiya jo kitne bhi parameter paas kardo chal jayega sab ke liye

// function sum(){
//     let total=0;
//     for(let value of arguments)
//          total=total + value;
//     return total;
// }
// let ans= sum(1,2,3,4,5,6); 
// console.log(ans);

// rest operator
// yaha prototype->array hai dynamic function me object tha
// sab values args me store hogi in array form
// function sum(num, value , ...args){ // rest operator should be the last
//     console.log(args); 
// }
// sum(1,2,33,4,5,6);

// default parameters

// function interest(p,r=5,y=10){
//     return p*r*y/100;
// }
// console.log(interest(1000));
// // agar apne r ko default parameter banaya to uske baad wale sare ko default parameter declare karna padega


// passing object through function

// let user={
//     username: "Parth",
//     price: 199
// };

// function handleObject(anyObj){
//     console.log(`Username is ${anyObj.usrname} and price is ${anyObj.price}`);
// }


// passing array through function

// const myNewArr=[200,400,500,600];

// function returnSecondValue(getArray){
//     return getArray[1];
// }

// console.log(returnSecondValue(myNewArr));   //or
// console.log(returnSecondValue([200,400,500,600]));




// GETTER SETTER

// GETTER-> acess the properties
// SETTER-> CHANGE OR MUTATE THE PROPERTIES

// let person={
//     fName: 'Parth',
//     lName: 'Pandey',
//     get  fullName(){
//         return `${person.fName} ${person.lName}`;
//     },
//     set fullName(value){
//         if(typeof value != String){
//             throw new Error("You have not sent a string");
//         }
//         let parts= value.split(' ');
//         this.fName=parts[0];
//         this.lName=parts[1];
//     }
// };

// person.fullName='Rahul Kumar';
// // console.log(person.fullName); // getter call hoga

// try{
//     person.fullName=1; // setter call hoga
// }
// catch(e){
//     alert(e);
// }
// console.log(person.fullName);

// reducing an array-->

// this is normal method
// let arr=[1,2,3,4,5];
// let total=0;

// for(let value of arr)
//      total=total + value;

// console.log(total);

// // reduce method

// let totalSum= arr.reduce((accumulator, currentValue) =>accumulator + currentValue,0);
// console.group(totalSum); // same as console.log no difference


// chai with code ----objects

 // singleton
// Object.create

// object literals

// const mySym = Symbol("key1")

//    String keys: "full name" (requires quotes due to the space in the key).
//    Symbol key: [mySym] allows using a Symbol as a key.
// const JsUser = {
//     name: "Hitesh",
//     "full name": "Hitesh Choudhary",
//     [mySym]: "mykey1",
//     age: 18,
//     location: "Jaipur",
//     email: "hitesh@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }
 

// console.log(JsUser.email)   or
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// JsUser.email = "hitesh@chatgpt.com" //overwrite object

// Object.freeze(JsUser)  freeze the object so changed

// JsUser.email = "hitesh@microsoft.com" 
// // console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());


// // const tinderUser = new Object()  or
// const tinderUser = {}

// tinderUser.id = "123abc"
// tinderUser.name = "Sammy"
// tinderUser.isLoggedIn = false

// console.log(tinderUser);

// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {     //object nesting
//         userfullname: {
//             firstname: "hitesh",
//             lastname: "choudhary"
//         }
//     }
// }

// // console.log(regularUser.fullname.userfullname.firstname);

// const obj1 = {1: "a", 2: "b"};
// const obj2 = {3: "a", 4: "b"};
// const obj4 = {5: "a", 6: "b"};

// const obj3 = { obj1, obj2 };  // create new obj containing two nested objects
// const obj5 = Object.assign({}, obj1, obj2, obj4) ; // {}--optional  // merge all objects together

// or mostly used method--spread oprator

// const obj3 = {...obj1, ...obj2}  // merge both objects 
// // console.log(obj3);

//array of objects 

// const users = [
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
// ]

// users[1].email

// using upar wala object
// // console.log(tinderUser);

// // console.log(Object.keys(tinderUser));  //returns array of keys of object so easily accescible
// // console.log(Object.values(tinderUser));
// // console.log(Object.entries(tinderUser)); //keys and entries dono dega

// // console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// object de-structuring

// const course={
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "hitesh"
// }

//for accesing courseInstructor

// course.courseInstructor

// or 

// const {courseInstructor: instructor}=course
// console.log(instructor);

// JSON API--
//ye errors nai h this will work

//object format api
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "999"
// }

//array format api


// [
//     {},
//     {},
//     {}
// ]


// function ---- this and arrow function

// const user={
//     username:"hitesh",
//     price:199,
//     welcomeMessage:function(){
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
//     }
// }

// user.welcomeMessage();
// user.username="sam";
// user.welcomeMessage();  // as humne welcomeMessage me this use kiya hai to current context ko show karega  to hitesh ki jagah sam ajayega


// this function ke andar nai kaam karega

// function chai(){
//     let username="hitesh";
//     console.log(this.username);
// }
// chai(); // will give us undefined

// //or another method to define function

// const chai=function(){
//     let useeername="hitesh";
//     console.log(this.username);
// }
// chai();

// <<<<<<<------  arrow function  --------->>>>>>>

// const chai= () => {
//     let username="hitesh";
//     console.log(this.username);
// }
// chai();

// or 

// const addTwo= (num1,num2) => {return num1 + num2};

// const addTwo= (num1,num2) =>  num1 + num2;

// const addTwo= (num1,num2) => (num1 + num2); // parenthesis use karna good practice

// console.log(addTwo(3,4));

// <<<<<-------  Immediately InvokedFunv=ction Expression (IIFE) ------>>>>

// (function chai(){
//     console.log(`DB CONNECED`);
// })();

// ( (name) => {
//     console.log(`DB CONNECTED TWO ${name}`);
// })('hiteh');

// control flow------>>>>>>>

// if(userEmail.length===0){
//     console.log("array is empty");
// }

// const emptyObj={};
// if(Object.keys(emptyObj).length===0){
//     console.log("object is empty");
// } 

// Nullish Coalescing operator (??): null undefined

// let val1;
// val1=5 ?? 10; // 5 assign hojayega

// val1= null?? 10; // 10 assign hoga
// val1 = undefined ?? 15; // 15 assign
//  console.log(val1);

// <<<<----- MAP: order of enteries maintained and unique values ----->>>>>

// const map= new Map();
// map.set('IN',"India");
// map.set('USA',"United States Of America");
// map.set('Fr',"France");

// console.log(map);
// // ye pura map print kardega
// for(const key of map){
//     console.log(key);
// }

// // if only keys print karani ho ya key and value 
// for(const [key,value] of map){
//     console.log(key, ':-',value);
// }


// for -in loop

// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: "ruby",
//     swift: "swift by apple"
// }

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

// const programming = ["js", "rb", "py", "java", "cpp"]

// for (const key in programming) {
//     console.log(programming[key]);
// }

// for-each loop

// const coding = ["js", "rb", "py", "java", "cpp"];

// coding.forEach(function(val){
//     console.log(val);
// })

 // or
 
// coding.forEach((item) => {
//     console.log(item);
// });

// another method

// function printMe(item){
//     console.log(item);
// }


// coding.forEach(printMe);

// const myCoding = [
//     {
//         languageName: "javascript",
//         languageFileName: "js"
//     },
//     {
//         languageName: "java",
//         languageFileName: "java"
//     },
//     {
//         languageName: "python",
//         languageFileName: "py"
//     },
// ]

// myCoding.forEach( (item) => {
    
//     console.log(item.languageName);
// } )


// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values);


// use of filter 


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);


// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

//   let userBooks = books.filter( (bk) => bk.genre === 'History')

//   userBooks = books.filter( (bk) => { 
//     return bk.publish >= 1995 && bk.genre === "History"
// })
//   console.log(userBooks);


// const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // const newNums = myNumers.map( (num) => { return num + 10})

// const newNums = myNumers
//                 .map((num) => num * 10 )
//                 .map( (num) => num + 1)
//                 .filter( (num) => num >= 40)

// console.log(newNums);


const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

// console.log(myTotal);


// const shoppingCart = [
//     {
//         itemName: "js course",
//         price: 2999
//     },
//     {
//         itemName: "py course",
//         price: 999
//     },
//     {
//         itemName: "mobile dev course",
//         price: 5999
//     },
//     {
//         itemName: "data science course",
//         price: 12999
//     },
// ]

// const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

// console.log(priceToPay);