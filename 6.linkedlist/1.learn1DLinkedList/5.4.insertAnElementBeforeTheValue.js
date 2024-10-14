// insert an element before the value x



// convert array into linked list



let arr = [3, 1, 5, 8];



// define a node class to represent each element in the linked list



class Node {

 // if nextNode is not passed null be considered

 constructor(data1, nextNode = null) {

  this.data = data1; // store the data

  this.next = nextNode; // pointer to the next node, initially set to null

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

  process.stdout.write(String(temp.data) + " ");

  // move to the next node

  temp = temp.next;

 }

}



// insert at kth element

function insertBeforeValue(head, el, val) {

 // if head === null

 if (!head) {

  return null;

 }



 if (head.data === val) {

  let temp = new Node(el, head);

  // make temp as head

  return temp;

 }



 // never ever tamper the head

 let temp = head;



 // traverse till temp !== null

 // we're checking for temp.next.data

 // so we need to stop at temp.next

 while (temp.next) {

  if (temp.next.data === val) {

   let x = new Node(el);

   // make temp.next as x.next

   x.next = temp.next;

   // make x as temp.next

   temp.next = x;



   // break

   break;

  }



  // move temp to temp.next

  temp = temp.next;

 }



 return head;

}



let head = arrToLinkedList(arr);



let newHead = insertBeforeValue(head, 10, 5);



printLinkedList(newHead);

