// stack implementation

// define a new class named stack
class Stack {
  // the constructor method initializes the stack property
  constructor() {
    // create an empty array to store stack elements
    this.stack = [];
  }

  // add an element to the stack
  push(element) {
    // add an element to the end of the array
    this.stack.push(element);
  }

  // get the size of the stack
  size() {
    return this.stack.length;
  }

  // check if the stack is empty
  isEmpty() {
    return this.size() === 0;
  }

  // remove the top element from the stack
  pop() {
    // check if the stack is empty
    if (this.isEmpty()) {
      return `Stack is empty. Can't perform pop`;
    }
    // remove and return the top element of the stack
    return this.stack.pop();
  }

  // view the top element of the stack, without removing it
  peek() {
    // check if the stack is empty
    if (this.isEmpty()) {
      return `Stack is empty. Can't perform peek`;
    }
    // return the top element of the stack
    return this.stack[this.size() - 1];
  }

  // clear all elements from stack
  clear() {
    this.stack = [];
  }

  // print all the elements in the stack
  printStack() {
    if (this.isEmpty()) {
      return `Stack is empty. Can't perform printStack`;
    }
    console.info('Stack elements are:');
    for (let i = this.size() - 1; i >= 0; i--) {
      console.log(this.stack[i]);
    }
  }
}

const myStack = new Stack();

myStack.push(10);
myStack.push(20);
myStack.push(30);

console.log(myStack); // Stack { stack: [ 10, 20, 30 ] }

console.log(myStack.peek()); // 30
myStack.pop();
console.log(myStack.peek()); // 20
console.log(myStack.size()); // 2
console.log(myStack.isEmpty()); // false
myStack.printStack(); // 20 10
