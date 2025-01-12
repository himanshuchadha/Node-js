console.log("Primitive data types and objects");

//nn bb ss u - premitives in JS
let a = null;
let b = 345;
let c = true;
let d = BigInt("567") + BigInt("3");
let e = "Himon";
let f = Symbol("symbol yeayy");
let g = undefined;

console.log(a, b, c, d, e, f, g);

//getting the type of data type

console.log(typeof d);

//objects

const item = {
  Himon: "programer",
  shubh: false,
};

//printing value of key Himon : programer

console.log(item["Himon"]);
