console.log("conditional statements");

//let a = prompt("your age:"); //this will give error in node js and wot give error in chrome
//a = Number.parseInt(a);
let a = 9;

if (a < 0) {
  console.log("Invalid age");
} else if (a < 9) {
  console.log("you are a kid");
} else if (a < 18 && a >= 9) {
  console.log("you are a teenager");
} else {
  console.log("you are a adult");
}
console.log("finished");

// switches in js

const x = "hii";

switch (x) {
  case "hii":
    console.log("thx");
    break;
  case "no thanks":
    console.log("you are so bad");
    break;

  default:
    console.log("huh");
    break;
}

// ternary operators

console.log("you can", a < 18 ? "not drive" : "drive");
