// deleting a kth element in linked list

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

// delete kth element in the linked list
function removeKthElement(head, k) {
  // if the list is empty, return null
  if (!head) {
    return null;
  }

  // if k = 1, remove head
  // move the head to next
  if (k === 1) {
    head = head.next;
    return head;
    // or
    // return head.next;
  }

  // if k is inbetween any element
  // counter
  let cnt = 0;
  let temp = head;
  let prev = null;
  // while temp !== null
  while (temp) {
    cnt++;
    // condition
    if (cnt === k) {
      prev.next = prev.next.next;
    }
    // remember temp as the previous while moving to next
    prev = temp;
    // traversal
    temp = temp.next;
  }

  // above logic will delete the tail of the linked list if k = 4
  // returning the head of the linked list
  return head;
}

let head = arrToLinkedList(arr);
// head of the modified linked list
head = removeKthElement(head, 3);
// print the linked list
printLinkedList(head);
