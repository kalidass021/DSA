/*
12345
1234
123
12
1
*/

function printPattern6(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i + 1; j++) {
      process.stdout.write(String(j));
    }
    process.stdout.write("\n");
  }
}

printPattern6(5);
