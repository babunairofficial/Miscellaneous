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
function Person(name, age){
    this.name = name;
    this.age = age;
}

//to create a method called talk with each person
Person.prototype.talk = function(){
    console.log(`Hi, my name is ${this.name}`);

}
//instances
let p1 = new Person("adam", 25);
let p2 = new Person("eve", 25);