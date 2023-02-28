//1. create object using object literals
const player = {};
player.name = 'Sabbir Sarker';
player.specialty = 'batsman';
player.bat = function(){
    console.log('swing your bat');
}
// console.log(player);

// player.bat();


const student = {
    name: 'Sakib Sarker',
    job: 'web',
    ball: function(){
        console.log('throw the ball');
    },
    salary: 10000
}

// console.log(student);
// student.ball();


//2. object constructor 
const person = new Object();
// console.log(person);


// 3. object create method
// const item = Object.create(null);
const atel = Object.create(student);
// console.log(atel.name);



// 4. class
class Prson{
    name =  'Santo';
    address = 'mirpur-1';
    constructor(age){
        this.age = age;
    }
}

const person1 = new Prson(45)
// console.log(person1);

// function
function Car(model, price){
    this.model = model;
    this.price = price;
}

const tesla = Car('saymoon', 500);
console.log(tesla);