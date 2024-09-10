// deleting a head node in linked list
// in sheet it's a 3rd problem
// convert array into linked list
let arr = [1, 8, 9, 3];
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

// function to traverse and print the linked list
function printLinkedList(head) {
  let temp = head;
  // while head !== null
  while (temp) {
    // print the data of the current node
    // console.log(temp.data);
    process.stdout.write(String(temp.data) + ' ');
    // move to the next node
    temp = temp.next;
  }
}

// 1. deletion of head
function removeHead(head) {
  // if head === null or if the list is empty
  if (!head) {
    return null;
  }

  // move the head to next
  head = head.next;
  return head;

  // or
  // we can directly return head.next
  // return head.next;
}

let head = arrToLinkedList(arr);
// new head
head = removeHead(head);
// print the linked list
printLinkedList(head);
