

// document.addEventListener('click',function()
// {
//     console.log('I Have clicked on document');
// });
// or another syntax
// function eventFunction()
// {
//     console.log('I Have clicked on document');
// }
// document.addEventListener('click',eventFunction());

// remove event listener
// function print()
// {
//     console.log('remove eventListener');
// }
// document.addEventListener('click',print());
// document.removeEventListener('click', print());


// event object

// const content=document.querySelector('#wrapper');

// content.addEventListener('click',function(event)
// {
//     console.log(event);
// }); // jab hello everyone pe click karoge pura event print hojayega console pe


// prevnt default action

// let links = document.querySelector('a');
// let thirdLink = links[2];

// thirdLink.addEventListener('click', function(event)
// {
//     event.preventDefault();
//     console.log('maza aya, acha laga');
// });

// creating new div using javascript

// let myDiv = document.createElement('div');

// for(let i=1;i<=100;i++)
// {
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para' + i;

//     newElement.addEventListener('click',function(event)
// {
//     console.log('I have clicked on para');
// });
//  myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);

// another method->> yaha we lost individuality of each para kyuki hamne yaha eventListener div 
// pe lagaya hai and pichle method me har para ka alag individuality thi
// but individual para ko access kar sakte hai using event.Target()

// let myDiv = document.createElement('div');
// function paraStatus(event)
// {
//     console.log('Para '+ event.target.textContent);
// }
// myDiv.addEventListener('click', paraStatus);

// for(let i=1;i<=100;i++)
// {
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para' + i;

//      myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);



// yaha span pe click karoge tab print hoga upar wala but jab para pe click karoge tab bhi code chlega but hum ye ni chahte
// so we will use .nodeName() to avoid this issue

// let element=document.querySelector('#wrapper');
// element.addEventListener('click', function(event)
// {
//     if(event.target.nodeName === 'SPAN'){
//         console.log('span pr click kia hai' + event.target.textContent);
//     }
// });


// we have an event jisse we can know ki sari html ki content load hui hai ya nai
// and ise hum head tag ke andar bhi likh sakte kyuki normally hum script ko body ke closing tag ke upar likhte hai
// DOMContentLoaded



// Adding 100Para
// let t1 = performance.now();
// for(let i =1;i <= 100;i++)
// {
//     let newElement = document.createElement('p');
//     newElement.textContent = `This is Para ${i}`;
    
//     document.body.appendChild(newElement);
// }
// let t2 = performance.now();

// console.log(`1st way take time : ${t2-t1}ms`);

// Optimize it 

// t1 = performance.now();
// let myDiv = document.createElement('div');
// for(let i =1;i <= 100;i++)
// {
//     let newElement = document.createElement('p');
//     newElement.textContent = `This is Para ${i}`;
    
//     myDiv.appendChild(newElement);
// }
// t2 = performance.now();
// document.body.appendChild(myDiv);
// console.log(`2nd way take time : ${t2-t1}ms`);


// using document DocumentFragment 

// t1 = performance.now();
// let myDiv = document.createDocumentFragment('div');
// for(let i =1;i <= 100;i++)
// {
//     let newElement = document.createElement('p');
//     newElement.textContent = `This is Para ${i}`;
    
//     myDiv.appendChild(newElement);
// }
// t2 = performance.now();
// document.body.appendChild(myDiv);
// console.log(`3rd way take time : ${t2-t1}ms`);


// nature of code is run-to-completion 



//EVENT LOOP
//It is a synchronous funtion 
// whereas eventListener is SYNCHRNOUS function

// run it in Loupe to check call stack function and Callback queue  

// console.log("Hi!");

// let para = documnent.createElement('p');
// para.textContent ='Heey , I m Para';
// para.addEventListeners('click', function()
// {
//     console.log("Hey Babe");
// });

// console.log("Welcome to Loupe");


// function addPara(){
//     let para= document.createElement('p');
//     para.textContent = 'Js is single';
//     document.body.appendChild(para);
// }

// function appendNewMessage()
// {
//     let para =document.createElement('p');
//     para.textContent='Kya haal chaal';
//     document.body.appendChild(para);
// }

// addPara();
// appendNewMessage();

// document.addEventListener('click',function(){
//     console.log("Hello didiii!");
// });


// setTimeout() function
