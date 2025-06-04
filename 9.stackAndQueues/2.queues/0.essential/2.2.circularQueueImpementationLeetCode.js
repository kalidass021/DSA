// circular queue implementation - leet code problem

/* 
    Design your implementation of circular queue. The circular queue is a linear data structure,
    in which the operations are performed based on First In First Out principle,
    and the last position is connected back to the first position to make a circle
*/

var MyCircularQueue = function(k) {
    this.queue = [];
    this.size = k;
}

MyCircularQueue.prototype.enQueue = function(value) {
    if (this.queue.length === this.size) {
        return false;
    }

    this.queue.push(value);
    return true;
};

MyCircularQueue.prototype.deQueue = function() {
    if (this.queue.length === 0) {
        return false;
    }
    this.queue.shift();
    return true;
};

MyCircularQueue.prototype.Front = function() {
    if (this.queue.length === 0) {
        return false;
    }

    return this.queue[0];
};

MyCircularQueue.prototype.Rear = function() {
    if (this.queue.length === 0) {
        return false;
    }

    return this.queue[this.queue.length - 1];
};

MyCircularQueue.prototype.isEmpty = function() {
    return this.queue.length === 0;
};

MyCircularQueue.prototype.isFull = function() {
    return this.queue.length === this.size;
};


var circularQueue = new MyCircularQueue(3);
circularQueue.enQueue(10);
circularQueue.enQueue(20);
circularQueue.enQueue(30);

console.log(circularQueue); // MyCircularQueue { queue: [ 10, 20, 30 ], size: 3 }

console.log(circularQueue.Front()); // 10
console.log(circularQueue.Rear()); // 30



