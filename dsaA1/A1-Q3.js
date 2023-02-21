// Question 3: You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in reverse order, such that the 1's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list.


// Task 1 :
// EXAMPLE



// Input: (7-> 1-> 6) + (5 -> 9 -> 2).That is,617 +

// 295.



// Output: 2 -> 1 -> 9. That is 912.

// -------------------------------------------------------------------------------------------------------------------------------------------------------

// Task 2: Suppose the digits are stored in a forward order.
// Repeat the above problem.



// EXAMPLE



// Input:(6 -> 1-> 7) + (2 -> 9 -> 5).That is,617+295.





// Output: 9 -> 1 -> 2. That is 912.

// (Skill mapping: JS Difficult)



class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function addTwoNumbers(l1, l2) {
    let carry = 0;
    let dummy = new ListNode();
    let current = dummy;
    while (l1 || l2 || carry) {
      let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
      carry = Math.floor(sum / 10);
      current.next = new ListNode(sum % 10);
      current = current.next;
      l1 = l1 ? l1.next : null;
      l2 = l2 ? l2.next : null;
    }
    return dummy.next;
  }
  function addTwoNumbersForward(l1, l2) {
   
    let r1 = reverseList(l1);
    let r2 = reverseList(l2);
   
    let result = addTwoNumbers(r1, r2);
    
    return reverseList(result);
  }
  
  function reverseList(head) {
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
  function addTwoNumbersForward(l1, l2) {
    let dummyHead = new ListNode(0);
    let p = l1;
    let q = l2;
    let curr = dummyHead;
    let carry = 0;
  
    while (p !== null || q !== null) {
      let x = p ? p.val : 0;
      let y = q ? q.val : 0;
      let sum = carry + x + y;
      carry = Math.floor(sum / 10);
      curr.next = new ListNode(sum % 10);
      curr = curr.next;
      if (p) p = p.next;
      if (q) q = q.next;
    }
  
    if (carry > 0) {
      curr.next = new ListNode(carry);
    }
  
    return dummyHead.next;
  }
  
  let l1 = new ListNode(7, new ListNode(1, new ListNode(6)));
  let l2 = new ListNode(5, new ListNode(9, new ListNode(2)));
  let result = addTwoNumbers(l1, l2);

  console.log((result)); 
  
  l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
  l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
  result = addTwoNumbers(l1, l2);

  console.log((result));


let l3 = new ListNode(6, new ListNode(1, new ListNode(7)));
let l4 = new ListNode(2, new ListNode(9, new ListNode(5)));
let result1 = addTwoNumbersForward(l3, l4);

console.log((result1));

l3 = new ListNode(3, new ListNode(4, new ListNode(2)));
l4 = new ListNode(4, new ListNode(6, new ListNode(5)));
result1 = addTwoNumbersForward(l3, l4);

console.log((result1)); 


  
