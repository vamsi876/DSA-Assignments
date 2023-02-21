//Problem Statement: Attempt the following questions on JavaScript.



// Question 1: Write a program to reverse a linked list with a pointer given to the head node as given below:
// Input: Head of the following linked list: 

// 1->2->3->4->null



// Output: Linked list should be changed to:

// 4->3->2->1->null

// (Skill mapping: JS basics)



class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function reverseLinkedList(head) {
    let prev = null;
    let current = head;
  
    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
  
    return prev; 
  }

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

let newHead = reverseLinkedList(head);

while (newHead) {
  console.log(newHead.value);
  newHead = newHead.next;
}
  
