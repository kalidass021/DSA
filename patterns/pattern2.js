/*
 *
 * *
 * * *
 * * * *
 * * * * *
 */

function printPattern2(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write("* ");
    }
    process.stdout.write("\n");
  }
}

printPattern2(5);
