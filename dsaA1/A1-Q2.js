
// Question 2: Write a program to create a function that takes two sorted linked lists in ascending order as input and returns a single sorted linked list in ascending order. 
// Input:

//       list1= 1->2->3

//       list2=4->5->6



// Output :  sortedlist = 1->2->3->4->5->6

// (Skill mapping: JS Intermediate)




class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function mergeSortedLists(list1, list2) {
    let dummy = new Node(null); 
    let tail = dummy; 
  
    while (list1 && list2) {
      if (list1.value <= list2.value) {
        tail.next = list1;
        list1 = list1.next;
      } else {
        tail.next = list2;
        list2 = list2.next;
      }
      tail = tail.next;
    }
  
    if (list1) {
      tail.next = list1;
    } else if (list2) {
      tail.next = list2;
    }
  
    return dummy.next; 
  }

  function print(list){
    while (list) {
      console.log(list.value);
      list = list.next;
    }}

let list1 = new Node(1);
list1.next = new Node(3);
list1.next.next = new Node(5);
print(list1)
console.log("_____________________________")
let list2 = new Node(2);
list2.next = new Node(4);
list2.next.next = new Node(6);
print(list2)
console.log("_____________________________")

let mergedList = mergeSortedLists(list1, list2);
print(mergedList)



