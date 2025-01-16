// for loops

// typing first five Numbers

for (let x = 0; x < 6; x++) {
  console.log(x);
}

// makes a piramid of stars

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 5; j > i; j--) {
    row += "\u00A0";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    row += "*";
  }
  console.log(row);
}
