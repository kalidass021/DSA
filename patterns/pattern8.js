/*
 *********
 *******
 *****
 ***
 *
 */

function printPattern8(n) {
  for (let i = 0; i < n; i++) {
    // space
    for (let j = 0; j < i; j++) {
      process.stdout.write(" ");
    }
    // stars
    for (let j = 0; j < 2 * n - 2 * i - 1; j++) {
      process.stdout.write("*");
    }
    // space
    for (let j = 0; j < i; j++) {
      process.stdout.write(" ");
    }
    process.stdout.write("\n");
  }
}

printPattern8(5);
