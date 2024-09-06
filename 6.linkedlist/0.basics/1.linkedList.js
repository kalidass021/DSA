// linked list
// Define a node class to represent each element in the linked list
// class Node {
// constructor (data1, next1=null) {
// this.data = data1;
// this.next = next1;
// }
// }
// Define a node class to represent each element in the linked list

class Node {
  constructor(data1) {
    this.data = data1; // store the data
    this.next = null; // pointer to the next node, initially set to null
  }
}

// creating a new Node with value from array
let y = new Node(2);
console.log(y);
