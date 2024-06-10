/* define Vehicle class */
class Vehicle{
    /* define class' constructor MUST USE BUILT IN CONSTRUCTOR METHOD(CAN NOT
    NAME IT SOMETHING ELSE!!!*/
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    /* built in function within the vehicle class */
    honk(){
        console.log('beep');
    }
    toString(){
        console.log(`The vehicle is a ${this.make} ${this.model} from ${this.year}.`)
    }
}

/* let myVehicle = new Vehicle('subaru','legacy',2016); */

class Car extends Vehicle{
    constructor(make,model,year){
        /* can only call super once. make sure to list all neccessary parameters
        from parent class */
        super(make,model,year);
        this.numWheels = 4;
    }

}

/* let myCar = new Car('subaru','legacy',2016); */


class Motorcycle extends Vehicle{
    constructor(make,model,year){
        super(make,model,year);
        this.numWheels = 2;
        
    }
    revEngine(){
        console.log('VROOM!!!');
    }

}

/* let myMotorcycle = new Motorcycle('indian','saddleback','2021'); */

class Garage{
    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = [];
    }

    add(newVehicle){
        /* if newVehicle parameter is not indeed a Vehicle, return this string*/
        if(!(newVehicle instanceof Vehicle)){
            return "Only vehicles are allowed here!";
        }
        /* if vehicles array is greater than or equal to capacity,
        return this string */
        if(this.vehicles.length >= this.capacity){
            return `Sorry, we're full`;
        } 
        /* else, push newVehicle to vehicle array, and return this string */
        else{
            this.vehicles.push(newVehicle);
            return `Vehicle added!`;
        }
        
    }
}