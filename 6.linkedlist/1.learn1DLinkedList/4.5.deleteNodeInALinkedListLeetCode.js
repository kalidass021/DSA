// delete node in a linked list - leet code problem
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

// function find node by position
// instead we can able to find by value also
function findNodeByPosition(head, position) {
  let temp = head;
  let cnt = 0;
  // while temp !== null
  while (temp) {
    if (cnt === position) {
      return temp;
    }

    cnt++;
    // moving the temp
    temp = temp.next;
  }
  return null; // if the position is out of bounds
}

// usage
let head = arrToLinkedList(arr);

// print the existing list
// printLinkedList(head);
// find the node at position 2 (0 based index)

let nodeToDelete = findNodeByPosition(head, 2);
function deleteNode(nodeToDelete) {
  // nodeToDelete === null
  if (!nodeToDelete) {
    return null;
  }

  // if node.next !== null
  if (nodeToDelete.next) {
    // assigning the next val to the node
    nodeToDelete.val = nodeToDelete.next.val;
    // assigning node.next.next to node.next
    nodeToDelete.next = nodeToDelete.next.next;
  } else {
    nodeToDelete = null;
  }
}

deleteNode(nodeToDelete);
// print the modified linked list
printLinkedList(head);
