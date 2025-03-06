// insert an element before kth node



let arr = [2, 3, 4, 1];



// node class to represent the each item in the linked list

class Node {

 constructor(data, nextNode = null, backNode = null) {

  this.data = data; // the value stored in the node

  this.next = nextNode; // pointer to the next node in the list. initially set to null

  this.back = backNode; // pointer to the previous node in the list. initially set to null

 }

}



// convert an array into doubly linked list



function arrToDoublyLinkedList(arr) {

 // create an head node with first element of the array

 let head = new Node(arr[0]);

 // assign head to previous node

 // mover

 let prev = head;



 // traverse the array starting from the second element

 for (let i = 1; i < arr.length; i++) {

  let temp = new Node(arr[i], null, prev);

  prev.next = temp;

  // prev = prev.next;

  // or

  prev = temp;

 }



 // returning the head of the doubly linked list

 return head;

}



// function to print the doubly linked list

function printDoublyLinkedList(head) {

 let temp = head; // start with head node



 // traverse until the end of the list

 // while temp !== null

 while (temp) {

  // print the value of the current node

  // console.log(temp.data);

  process.stdout.write(String(temp.data + " "));

  // move to the next node

  temp = temp.next;

 }

}



function insertBeforeHead (head, val) {

  // create a newHead before the existing head

  let newHead = new Node(val, head, null);



  // make head.back pointing to newHead

  head.back = newHead;



  return newHead;

}





// function insertBeforeTail (head, val) {



// // edge case

// // if doubly linked list contails only one node

// // if head.next === null

// if (!head.next) {

// return insertBeforeHead(head, val);

// }

// // store the head in the tail

// let tail = head;



// // move the tail until tail.next !== null

// while (tail.next) {

// // move the tail

// tail = tail.next;

// }



// // previous of tail

// let prev = tail.back;

   

// // create a node with val

// // and make it's next pointing to tail

// // and it's back pointing to prev

// let newNode = new Node(val, tail, prev);



// // prev.next should point to newNode

// prev.next = newNode;

// // tail.back should point to newNode

// tail.back = newNode;



// return head;

// }





function insertBeforeKthNode (head, k, val) {

  // if k === 1 (insert before head)

  if (k === 1) {

    return insertBeforeHead(head, val);

  }



  // insert before other elements



  let kthNode = head; // initially

  let cnt = 0;



  // while kthNode !== null

  while(kthNode) {

   cnt++;

   if (cnt === k) {

    break;

   }

   // move the kthNode

   kthNode = kthNode.next;

  }



  let prev = kthNode.back;

  // create a new node with prev as back element and k as next element

  let newNode = new Node(val, kthNode, prev);



  // connect new node with back and next (kthNode)

  prev.next = newNode;

  kthNode.back = newNode;



  return head;

}



let head = arrToDoublyLinkedList(arr);



// let newHead = insertBeforeTail(head, 10);



let newHead = insertBeforeKthNode(head, 3, 10);







printDoublyLinkedList(newHead);

