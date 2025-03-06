// delete head of the doubly linked list



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





function deleteHeadOfTheDoublyLL(head) {

  // edge cases

  // when the linked list is empty (head === null)

  // when the linked list have only one element (head.next === null)

  if (!head || !head.next) {

    return null;

  }



  // store the head in the prev (never ever tamper the head)

  let prev = head;

  // move the head to the next node

  head = head.next;

  // make newHead's back pointing to null

  head.back = null;

  // make prevHead's next poiting to null

  prev.next = null;



  return head;

}



let head = arrToDoublyLinkedList(arr);



let newHead = deleteHeadOfTheDoublyLL(head);



printDoublyLinkedList(newHead);

