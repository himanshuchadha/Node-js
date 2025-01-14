// practice set 2

// question 1

let a = 15;
if (a > 10 && a < 20) {
  console.log("age between 10 and 20");
} else {
  console.log("your age is not between 10 and 20");
}

// question 2
let x = "hii";

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

// question 3

let y = 6;

if (y % 3 == 0 && y % 2 == 0) {
  console.log("yes it is divisible by 2 and 3 ");
} else {
  console.log("this is not divisible by 3 and 2");
}

// question 4

let g = 8;

if (g % 3 == 0 || g % 2 == 0) {
  console.log("yes it is divisible by 2 or 3 ");
} else {
  console.log("this is not divisible by 3 or 2");
}

// question 5

let h = 15;

console.log("you can", h >= 18 ? "drive" : "not drive");
