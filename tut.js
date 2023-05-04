if (true) {
} else {
}

let fName = "kasun";

if (age > 10) {
  name = "pedro";
} else {
  name = "jack";
}

let mName = age > 10 ? "Kasun" : "jack";
const func = () => {
  return age > 10 ? <div>Pedro</div> : <div>Kasun</div>;
};
const person = {
  name: "oreo",
  age: 20,
  isMarried: false,
};

const name = person.name;
const age = person.age;
const isMarried = person.isMarried;

const { name1, age1, isMarried1 } = person;

const person2 = { ...person, name: "dack" };

let names = ["pedro", "bedro", "reddo"];

names.map((ele) => {
  return <h1>{ele}</h1>;
});

names.filter((ele) => {
  return ele !== "kasun";
});
