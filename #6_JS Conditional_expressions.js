console.log("conditional statements");

//let a = prompt("your age:"); //this will give error in node js and wot give error in chrome
//a = Number.parseInt(a);
let a = prompt("your age:");

if (a < 0) {
  console.log("Invalid age");
} else if (a < 9) {
  console.log("you are a kid");
} else if (a < 18 && a > 9) {
  console.log("you are a teenager");
} else {
  console.log("you are a adult");
}
console.log("finished");
