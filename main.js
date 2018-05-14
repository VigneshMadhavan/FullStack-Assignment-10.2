
class Airplane{

   
    /*
    Constructor
    Description: To constructor a Airplane of having name,occupancy and speed
    Arguments: $name,$occupancy,$speed
    Argument Type: $name is string, $occupancy is number and $speed is number
    */
    constructor($name,$occupancy,$speed){
        
        this.checkName($name);
        this.checkOccupancy($occupancy);
        this.checkSpeed($speed);

        this._name=$name;
        
        this._occupancy=$occupancy;
       
        this._speed=$speed;
    }

    /*
    Method Name:checkName
    Description: To validate the name properties as per requirement
    Arguments: $name
    Argument Type: String 
    Return: Error if not as per requirement 
    Return Type:Error
    */
    checkName($name){
        if($name=="" || $name==null || $name==undefined){
            throw new Error("Name should not be empty");
        }
    }
    /*
    Method Name:checkOccupancy
    Description: To validate the occupancy properties as per requirement
    Arguments: $occupancy
    Argument Type: Number 
    Return: Error if not as per requirement 
    Return Type:Error
    */

    checkOccupancy($occupancy){
      
        if($occupancy=="" || $occupancy==null || $occupancy==undefined || isNaN($occupancy)){
            throw new Error("Occupancy should not be empty and should be a number");
        }else if($occupancy>180 || $occupancy<0){
            throw new Error("Occupancy should not be negative and less than 180");
        }
    }
    /*
    Method Name:checkSpeed
    Description: To validate the speed properties as per requirement
    Arguments: $speed
    Argument Type: Number 
    Return: Error if not as per requirement 
    Return Type:Error
    */
    checkSpeed($speed){
      
        if($speed=="" || $speed==null || $speed==undefined || isNaN($speed)){
            throw new Error("Speed should not be empty and should be a number");
        }else if($speed>900 || $speed<0){
            throw new Error("Speed should not be negative and less than 900");
        }
    }

   

    status(){
       return `Airplane: ${this._name} with ${this._occupancy} occupancy, is moving at ${this._speed} km/hr`;
    }


    increaseSpeed($value){
       
        
        this.checkSpeed($value);

        let $currentSpeed=this._speed+$value;

        this.checkSpeed($currentSpeed);

        this._speed=$currentSpeed;


    }

    decreaseSpeed($value){
       
        
        this.checkSpeed($value);

        let $currentSpeed=this._speed-$value;

        this.checkSpeed($currentSpeed);

        this._speed=$currentSpeed;


    }

    

}

let myFlight_1=new Airplane("Boieng 777",150,300);
let myFlight_2=new Airplane("Boieng 123",120,550);
let myFlight_3=new Airplane("Boieng 555",100,600);

//print the myFlights objects

console.log(myFlight_1.status());
console.log(myFlight_2.status());
console.log(myFlight_3.status());


//increase speed of airplane objects by 200

myFlight_1.increaseSpeed(200);
myFlight_2.increaseSpeed(200);
myFlight_3.increaseSpeed(200);

//print the myFlights objects after speed increased
console.log("myFlights objects after speed increased");
console.log(myFlight_1.status());
console.log(myFlight_2.status());
console.log(myFlight_3.status());
