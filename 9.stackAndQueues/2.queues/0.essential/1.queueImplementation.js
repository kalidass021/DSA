// queue implementation

// define a new class nameed queue
class Queue {
  // the constructor method initializes the queue property
  constructor() {
    // create an empty array to store the elements
    this.queue = [];
  }
  // add element to the queue
  enqueue(element) {
    this.queue.push(element);
  }

  // get the size of the queue
  size() {
    return this.queue.length;
  }

  // check if the queue is empty
  isEmpty() {
    return this.size() === 0;
  }

  // remove the first element from the queue
  dequeue() {
    // check if the queue is empty
    if (this.isEmpty()) {
      throw new Error(`Underflow/ Queue is empty, Can't perform dequeue.`);
    }
    // remove and return the first element of the queue
    return this.queue.shift();
  }

  // view the first element of the queue, without removing it
  front() {
    // check if the queue is empty
    if (this.isEmpty()) {
      throw new Error(`Queue is empty, Can't perform front.`);
    }

    // return the first element of the queue
    return this.queue[0];
  }

  // print all the elements in the queue
  printQueue() {
    if (this.isEmpty()) {
      throw new Error(`Queue is empty. Can't perform printQueue.`);
    }

    console.log('Queue elements are:');

    for (let i = 0; i < this.size(); i++) {
      console.log(this.queue[i]);
    }
  }
}


const myQueue = new Queue();

myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);

console.log(myQueue); // Queue { queue: [ 10, 20, 30 ] }

console.log(myQueue.front()); // 10

console.log(myQueue.dequeue()); // 10

console.log(myQueue.front()); // 20

console.log(myQueue.size()); // 2

console.log(myQueue.isEmpty()); // false

myQueue.printQueue(); // Queue elements are: 20 30
