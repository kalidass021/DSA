/*
1
22
333
4444
55555
*/

function printPattern4(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(String(i));
    }
    process.stdout.write("\n");
  }
}

printPattern4(5);
