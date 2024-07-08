/*
 *
 **
 ***
 ****
 *****
 ****
 ***
 **
 *
 */

function printPattern10(n) {
  for (let i = 1; i <= 2 * n - 1; i++) {
    let stars = i;

    if (i > n) stars = 2 * n - i;
    for (let j = 1; j <= stars; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
}

printPattern10(5);
