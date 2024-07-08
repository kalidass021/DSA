/*
1
12
123
1234
12345
*/

function printPattern3(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(String(j));
    }
    process.stdout.write("\n");
  }
}

printPattern3(5);
