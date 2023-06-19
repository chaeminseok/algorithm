/**const a = "age";
const obj1 = {
  id: 1,
  name: "채민석",
  "my name": "chae",
  [a]: 25,
  getNameFunction: function () {
    console.log("민석입니다");
  },
  getLastName() {
    console.log(this.name);
    console.log("function this:", this);
  },
  getNameWithArrowFunciton: () => {
    console.log(this.name);//undefined가 나온다
    console.log("arrow function this:", this); .
  },
};

obj1.getLastName();
obj1.getLastNameFunction();
obj1.getNameWithArrowFunciton();  **/
const obj2 = {
  id: 1,
  name: "채민석",
  age: 25,
};
//const id =obj2.id;
//const name =obj2.name ;
//const age =obj2.age;
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a);
