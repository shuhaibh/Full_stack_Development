document.write("This is a beautiful day");
console.log("From External file");
console.warn("It's a warning");
console.error("Error!");

let name1 = "Muhammad Shuhaibh";
let salary = 2400000;
var isMinor = false;

console.log(name1);
console.log(typeof salary);
console.log(salary);
console.log(typeof name1);
console.log(typeof isMinor);

name1 = "Muhammad Shuhaibh P";
console.log(name1);

console.log(`My name is ${name1}`);

const pi = 3.14;
console.log(pi);

// let flag1=true,flag2=false

// if(flag1 || flag2){
//     console.log("Either one is true")
// }

const fav_fruits = ["Mango", "Apple", "Apricots", "Cherry", "Banana"];
for (let i = 0; i < fav_fruits.length; i++) {
  console.log(fav_fruits[i]);
}

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}

const text = document.getElementById("hover-text");
text.addEventListener("mouseover", () => {
  text.innerHTML = "You are above me";
  text.style.backgroundColor = "red";
});

text.addEventListener("mouseout", () => {
  text.innerHTML = "Hover over me";
  text.style.backgroundColor = "aqua";
});

const alerts = document.getElementById("alert-button");
alerts.addEventListener("click", (e) => {
  alert("You Clicked me!");
  console.log(e.target);
  console.log(e.type);
});

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error: ", error));

  //try using async await
  