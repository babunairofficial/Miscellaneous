// let arr1 = [1, 2, 3, 4];
// let arr2 = ['a', 'b', 'c'];
// arr1.sayHello = () => {
//     console.log("hello!, i am arr1");
// };

// arr2.sayHello = () => {
//     console.log("hello!, i am arr2");
// };

// 

//Constructors - does not return anything & start with capital
// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// //to create a method called talk with each person
// Person.prototype.talk = function(){
//     console.log(`Hi, my name is ${this.name}`);

// }
// //instances
// let p1 = new Person("adam", 25);
// let p2 = new Person("eve", 25);

// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     talk(){
//         console.log(`Hi, my name is ${this.name}`);
//     }
// }
// let p1 = new Person("adam", 25);
// let p2 = new Person("eve", 25);

// class Person{
//     constructor(name, age){
//         console.log("person class constructor");
//         this.name = name;
//         this.age = age;
//     }
//     talk(){
//         console.log(`Hi, I am ${this.name}`);
//     }
// }

// class Student extends Person{
//     constructor(name, age, marks){
//         console.log("student class constructor");
//        super(name, age); //parent class constructor is being called
//         this.marks = marks;
//     }
    
// }



// class Teacher extends Person{
//     constructor(name, age, subject){
//         console.log("teacher class constructor");
//         super(name, age); //parent class constructor is being called
//         this.subject = subject;
//     }
    
// }

class Mammal{ //base class / parent
    constructor(name){
        this.name = name;
        this.type = "warm-blooded";
    }

    eat(){
        console.log("I am eating");
    }
}

class Dog extends Mammal{ //child class
    constructor(name){
        super(name);
    }

    bark(){
        console.log("woof..");
    }
}

class Cat extends Mammal{ //child class
    constructor(name){
        super(name);
    }

    meow(){
        console.log("meow..");
    }
}