const EventEmitter = require('events')

class Vehicle extends EventEmitter{
    constructor(make, brand, year){
        super()
        this.make = make
        this.brand = brand
        this.year = year
    }
    info(){
        console.log(`This ${this.make} ${this.brand} was made in ${this.year}.`)
    }
    parked(){
        console.log(`The ${this.make} ${this.brand} is parked.`)
    }
    engineStart(){
        console.log(`The ${this.make} ${this.brand} is starting up the Engine.`)
    }
    drive(){
        console.log(`The ${this.make} ${this.brand} is in Drive.`)
    }
    reverse(){
        console.log(`The ${this.make} ${this.brand} is in Reverse.`)
    }
    neutral(){
        console.log(`The ${this.make} ${this.brand} is in Neutral.`)
    }
}

class Car extends Vehicle{
    constructor(make, brand, year, honk, artist){
        super(make, brand, year)
        this.honk = honk
        this.artist = artist
    }
    honk(){
        console.log(`The ${this.make} ${this.brand} is honking at you! Brake check him when you get the chance.`)
    }
    music(){
        console.log(`This ${this.make} ${this.brand} is blasting ${this.artist} on full volume!`)
    }
}

class Motorcycle extends Vehicle{
    constructor(make, brand, year, category){
        super(make, brand, year)
        this.category = category
    }
    info(){
        console.log(`This ${this.make} from ${this.brand} which was made in ${this.year} is meant for ${this.category}.`)
    }
    revEngine(){
        console.log(`This ${this.make} ${this.brand} is revving its engine.`)
    }
}

motor = new Motorcycle("Africa Twin", "Honda", "2020", "Touring")
motor.info()