// circular queue implementation

/* 
    Design your implementation of the circular queue. The circular queue is a
    linear data structure in which the operations are performed based on First In First Out
    principle, and the last position is connected back to the first position to make a circle.
*/

class CircularQueue {
  constructor(k) {
    this.queue = [];
    this.size = k; // maximum size of the circular queue
  }

  // returns the current length of the queue
  length() {
    return this.queue.length;
  }
  // check if the queue is empty
  isEmpty() {
    return this.length() === 0;
  }
  // check if the queue is full
  isFull() {
    return this.length() === this.size;
  }
  // add an element to the queue
  enqueue(element) {
    if (this.isFull()) {
      throw new Error(
        `Overflow/ Circular Queue is already full, Can't perform enqueue.`
      );
    }
    // add elements to the end of the queue
    this.queue.push(element);
  }
  // remove and returns the front element from the queue
  dequeue() {
    if (this.isEmpty()) {
      throw new Error(
        `Underflow/ Circular Queue is empty, Can't perform dequeue.`
      );
    }

    return this.queue.shift();
  }
  // returns the front element of the queue without removing it
  front() {
    if (this.isEmpty()) {
      throw new Error(`Circular Queue is empty, Can't perform front.`);
    }

    return this.queue[0];
  }
  // returns the rear element of the queue without removing it
  rear() {
    if (this.isEmpty()) {
      throw new Error(`Circular Queue is empty, Can't perform rear.`);
    }

    return this.queue[this.length() - 1];
  }
}

const myCircularQueue = new CircularQueue(3);

console.log(myCircularQueue);

myCircularQueue.enqueue(30);
myCircularQueue.enqueue(20);
myCircularQueue.enqueue(10);

console.log(myCircularQueue);
console.log(myCircularQueue.rear());
