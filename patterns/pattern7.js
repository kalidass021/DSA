/*
    *    
   ***   
  *****  
*******
*********
 
*/

function printPattern7(n) {
  for (let i = 0; i < n; i++) {
    // space
    for (let j = 0; j < n - i - 1; j++) {
      process.stdout.write(" ");
    }
    // star
    for (let j = 0; j < 2 * i + 1; j++) {
      process.stdout.write("*");
    }
    // space
    for (let j = 0; j < n - i - 1; j++) {
      process.stdout.write(" ");
    }
    process.stdout.write("\n");
  }
}

printPattern7(5);
