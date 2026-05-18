console.log("Welcome to JS!");

// const myMap = new Map();
// myMap.set("username", "shuaibdev");
// myMap.set("real name", "Shuaib khan");
// myMap.set("username", "shuaibdev1");
// console.log(myMap);

// const userMethods = {
//   about: function () {
//     return `${this.firstName} is ${this.age} years old.`;
//   },
//   is18: function () {
//     return this.age >= 18;
//   },
// };

// function createUser(_firstName, _lastName, _email, _age, _address) {
//   const user = Object.create(userMethods);
//   user.firstName = _firstName;
//   user.lastName = _lastName;
//   user.email = _email;
//   user.age = _age;
//   user.address = _address;
//   return user;
// }

// const user1 = createUser(
//   "Shuaib",
//   "Khan",
//   "skhan.csit@gmail.com",
//   "26",
//   "KP, Pakistan",
// );

// console.log(user1.about());
// console.log(user1.is18());
// // console.log(user1.__proto__);
// console.log(Object.getPrototypeOf(user1));


// const obj = {
//   name : "Shuaib"
// }

// function myFunc(){
//   console.log(`${this.name}`)
// }

// console.log(myFunc.prototype);







// createUser.prototype.about = function () {
//     return `${this.firstName} is ${this.age} years old.`;
//   };

//   createUser.prototype.is18 = function () {
//     return this.age >= 18;
//   }

// function createUser(_firstName, _lastName, _email, _age, _address) {
//   const user = Object.create(createUser.prototype);
//   user.firstName = _firstName;
//   user.lastName = _lastName;
//   user.email = _email;
//   user.age = _age;
//   user.address = _address;
//   return user;
// }

// const user1 = createUser(
//   "Shuaib",
//   "Khan",
//   "skhan.csit@gmail.com",
//   "26",
//   "KP, Pakistan",
// );

// // console.log(user1.about());
// // console.log(user1.is18());
// console.log(user1.__proto__);
// // console.log(Object.getPrototypeOf(user1));


// function myFunc(_username, _age){
//   const this_keyword = Object.create(myFunc.prototype)
//   this_keyword.username = _username;
//   this_keyword.age = _age;
//   return this_keyword;
// }

// myFunc.prototype.about = function(){
//   return `My username is ${this.username}, and i am ${this.age} years old.`
// }
// const user1 = myFunc("Shuaib", "26");
// console.log(user1.about());



// function constructorFunc(){
//   this.username = "Shuaib";
//   this.age = "26";
// }
// constructorFunc.prototype.about = function(){
//   return this.username + " " + this.age
// }
// const u1 = new constructorFunc();
// console.log(u1.about());






// CreateUser.prototype.about = function () {
//     return `${this.firstName} is ${this.age} years old.`;
//   };

//   CreateUser.prototype.is18 = function () {
//     return this.age >= 18;
//   }

// function CreateUser(_firstName, _lastName, _email, _age, _address) {
//   this.firstName = _firstName;
//   this.lastName = _lastName;
//   this.email = _email;
//   this.age = _age;
//   this.address = _address;
// }

// const user1 = new CreateUser(
//   "Shuaib",
//   "Khan",
//   "skhan.csit@gmail.com",
//   "26",
//   "KP, Pakistan",
// );

// console.log(user1.about());
// console.log(user1.is18());
// // console.log(user1.__proto__);
// // console.log(Object.getPrototypeOf(user1));

// Arrray.prototype.about = function(){
//   return "HELO ABOUT"
// }
// function Arrray(){
//   this.name = "Shuaib"
// }
 
// const arr = new Arrray();

// console.log(arr);

// const arr = new Array();
// console.log(arr);


class Animal{
    constructor(_name, _food){
        this.name = _name;
        this.food = _food;
    }
    eat(){
        console.log(`${this.name} eats ${this.food}.`);
    }
}

const dog = new Animal("Dog", "Meat");
console.log(dog);

