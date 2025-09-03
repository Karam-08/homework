// Task 1: Warm Up
const EventEmitter = require('events')
const customEmitter = new EventEmitter

class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    introduce(){
        console.log(`Hi, my name is ${this.name}, and I am ${this.age} years old.`)
    }
}



const Karam = new Person("Karam", "17")
const Joshua = new Person("Joshua", "17")

Joshua.introduce();
Karam.introduce();

////////////////////////////////////////

// Task 2: Superclass & Subclass

class Vehicle extends EventEmitter{
    constructor(){
        
    }

    drive(){

    }
}