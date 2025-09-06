const EventEmitter = require('events')

class Vehicle extends EventEmitter{
    constructor(type, year){
        super()
        this.type = type
        this.year = year
    }
    info(){
        console.log(`This is a ${this.type} from ${this.year}.`)
    }
    go(){
        console.log(`This ${this.type} is accelerating.`)
    }
}

train = new Vehicle("Train", 1885)
train.info()
train.go()

class Car extends Vehicle{
    constructor(make, brand, year){
        super("Car", year) // "Car" replaces type
        this.brand = brand
        this.make = make
    }
    info(){
        console.log(`This is a ${this.make} ${this.brand} from ${this.year}.`)
    }
    honk(){
        console.log(`Beep Beep! The ${this.make} ${this.brand} is honking.`)
    }
}

corolla = new Car("Toyota", "Corolla", 2022)
corolla.info()
corolla.honk()

class Plane extends Vehicle{
    constructor(brand, make, type, year, maxKPH, fast){
        super(type, year)
        this.brand = brand
        this.make = make
        this.maxKPH = maxKPH
        this.fast = fast
    }
    info(){
        console.log(`This is the ${this.brand} made by ${this.make}. It is a ${this.type} from ${this.year}.`)
    }
    go(){
        console.log(`She can go up to ${this.maxKPH} KPH.`)
    }
    isFast(){
        if(this.maxKPH > 400){
            console.log(`This ${this.type} is really fast!`)
        }else{
            console.log(`This ${this.type} is not that fast.`)
        }
    }
}

superSabre = new Plane("F-100D Super Sabre", "North American Aviation", "Jet", 1956, 2325)
superSabre.info()
superSabre.go()
superSabre.isFast()
console.log("----------------") // Seperator

vehicles = [train, corolla, superSabre]

vehicles.forEach(vehicle => {
    vehicle.info()
    vehicle.go()

    if('honk' in vehicle){
        vehicle.honk()
    }

    if('isFast' in vehicle){
        vehicle.isFast()
    }
});