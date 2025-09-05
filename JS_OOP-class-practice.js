// Task 1: Warm Up

const EventEmitter = require('events')

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

console.log("") // Spacing in the output

// Task 2: Superclass & Subclass

class Vehicle extends EventEmitter{
    constructor(brand, year){
        super()
        this.brand = brand
        this.year = year
    }

    drive(){
        console.log(`This ${this.brand} is driving.`)
    }
}

class Car extends Vehicle{
    constructor(brand, year, doors){
        super(brand, year)
        this.doors = doors
    }

    honk(){
        console.log("Beep Beep! The car honked.")
    }
}

class Motorcycle extends Vehicle{
    constructor(brand, year, type){
        super(brand, year)
        this.type = type
    }

    revEngine(){
        console.log("Vroom! The motorcycle revs its engine.")
    }
}

const car = new Car("Toyota", "2022", "4")
const motorcycle = new Motorcycle("Honda", "2021", "Touring")

car.drive()
car.honk()

motorcycle.drive()
motorcycle.revEngine()

console.log("")

// Task 3: My Own OOP World

class Cuisine extends EventEmitter{
    constructor(name, originCountry, signatureDish){
        super()
        this.name = name
        this.originCountry = originCountry
        this.signatureDish = signatureDish
    }

    describe(){
        console.log(`The ${this.name} cuisine, originating from ${this.originCountry}, is best known for ${this.signatureDish}.`)
    }
}

const Japan = new Cuisine("Japanese", "Japan", "Sushi")
Japan.describe()


class fusionCuisine extends Cuisine{
    constructor(name, originCountry, signatureDish, mainFusion){
        super(name, originCountry, signatureDish)
        this.mainFusion = mainFusion
    }

    fusionDescription(){
        console.log(`${this.name} combines flavors from ${this.mainFusion} to create something unique.`)
    }
}

const texMex = new fusionCuisine("Tex-Mex", "Texas", "Chili Con Carne", "Mexico and Texas")

texMex.describe()
texMex.fusionDescription()


class holidayCuisine extends Cuisine{
    constructor(name, originCountry, signatureDish, holiday){
        super(name, originCountry, signatureDish)
        this.holiday = holiday
    }

    holidayTradition(){
        console.log(`${this.signatureDish} is usually enjoyed during ${this.holiday}.`)
    }
}

const potRoast = new holidayCuisine("American", "America", "Pot Roast", "Christmas") // I heard about Pot Roast before

potRoast.describe()
potRoast.holidayTradition()