// convert array into linked list
// in sheet it's a 4th problem
let arr = [2, 1, 3, 8];

// define a node class to represent each element in the linked list
class Node {
  constructor(data1) {
    this.data = data1; // store the data
    this.next = null; // pointer to the next node, initially set to null
  }
}

// function to convert array to linked list
function arrToLinkedList(arr) {
  // check if arr is empty
  // if arr.length === false
  if (!arr.length) {
    return null;
  }

  // create a head node with first element of the array
  let head = new Node(arr[0]);
  // initialize mover pointer to traverse the linked list
  // initially set to head
  let mover = head;
  // loop through the array starting from the 2nd element
  for (let i = 1; i < arr.length; i++) {
    // create a new node with each element in the array
    let temp = new Node(arr[i]);
    // link the current node with new node
    mover.next = temp;
    // move the pointer to the next node
    mover = mover.next;
    // or
    // mover = temp;
  }

  // return the head of the linked list
  return head;
}

let linkedListHead = arrToLinkedList(arr);

// function to traverse and print the linked list
function lengthOfLinkedList(head) {
  let cnt = 0;
  let temp = head;
  // while head !== null
  while (temp) {
    // move to the next node
    temp = temp.next;
    // increase cnt
    cnt++;
  }

  return cnt;
}

console.log(lengthOfLinkedList(linkedListHead));
