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
    console.log(this.name);
    console.log("arrow function this:", this);
  },
};

obj1.getLastName();
obj1.getLastNameFunction();
obj1.getNameWithArrowFunciton(); **/
const b = 25;
const obj2 = {
  id: 1,
  name: "채민석",
  age: 25,
};
//const id =obj2.id;
//const id =obj2.id;
//const id =obj2.id;
obj2.habit = "soccer";
console.log(obj2);
const { id, name, age } = obj2;

console.log(age);

const arr1 = [1, "민석", 25];
const [번호, 이름, 나이] = arr1;
console.log(번호);
