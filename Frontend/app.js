// let arr1 = [1, 2, 3, 4];
// let arr2 = ['a', 'b', 'c'];
// arr1.sayHello = () => {
//     console.log("hello!, i am arr1");
// };

// arr2.sayHello = () => {
//     console.log("hello!, i am arr2");
// };
function PersonMaker(name, age) {
    const person = {
        name: name,
        age: age,
        talk(){
            console.log(`Hi, my name is ${this.name}`);
        },
    };
    
    return person;
}

let p1 = PersonMaker("adam", 25);
let p2 = PersonMaker("eve", 25);