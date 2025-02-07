class User{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }

    encryptPassword(){
        return `${this.password}abc`;
    }
    changeUsername(){
        return `${this.username.toUpperCae()}`;
    }
}

const chai=new User("chai","chai@gmail.com","123");
console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// another type for this without using class

function User(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
}

User.prototype.encryptPassword=function(){
    return `${this.password}abc`;
}
User.prototype.changeUsername=function(){
    return `${this.username.toUpperCae()}`;
}

const tea=new User("tea","tea@gmail.com","1234");
console.log(tea.encryptPassword());
console.log(tea.changeUsername());

