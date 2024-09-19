// inserting the element in the head of the linked list
// in sheet it's 2nd problem

// convert array into linked list
let arr = [2, 3, 1, 8];

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

function insertHead(head, val) {
  let newHead = new Node(val);
  newHead.next = head;
  // return the new head
  return newHead;
}

let head = arrToLinkedList(arr);
let newHead = insertHead(head, 5);

printLinkedList(newHead);
