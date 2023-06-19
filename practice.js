//deep copy 변수
let a = 1;
let b = a;
b = 2;
console.log(a, b); //1,2

//shallow copy
const obj1 = {
  name: "chaemomseok",
  age: 25,
};
let obj1Copy = obj1;
obj1Copy.age = 20;
console.log(obj1, obj1Copy); //{ name: 'chaemomseok', age: 20 } { name: 'chaemomseok', age: 20 }

//객체의 deep copy
const obj2 = {
  name: "chae",
  age: 25,
};
let obj2Copy = { ...obj2 };
obj2Copy.name = "kim";
console.log(obj2, obj2Copy);//{ name: 'chae', age: 25 } { name: 'kim', age: 25 }

