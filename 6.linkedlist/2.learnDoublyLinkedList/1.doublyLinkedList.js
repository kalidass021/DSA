
// representation of doubly linked list

// define a node class to represent the each item in the linked list



let arr = [1, 3, 2, 4];



class Node {

  constructor (data, nextNode=null, backNode=null) {

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

  for (let i=1; i<arr.length; i++) {

    let temp = new Node(arr[i], null, prev);

    prev.next = temp;

    // move the prev

    prev = prev.next;

    // or

    // prev = temp;



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

    process.stdout.write(String(temp.data + ' '));

    // move to the next node

    temp = temp.next;

  }

}





let head = arrToDoublyLinkedList(arr);

printDoublyLinkedList(head);

