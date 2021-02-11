/* eslint-disable strict */

//creating a node item
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

// 1. Creating a linked list class
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  findMiddle() {
    let currNode = this.head;
    let count = 0;

    while(currNode !== null) {
      currNode = currNode.next;
      count = count + 1;
    }
    let idx = (count / 2) - (count % 2);
    let middle = this.findByIdx(idx);
    return this.findBefore(middle.value);
    
  }

  threeFromEnd() { 
    let currNode = this.head;
    let prevNode = null;
    
    if (!this.head) {
      return null;
    }
    
    while (currNode.value !== null) {
      if (currNode.next.next === null) {
        return prevNode;
      }
      else {
        prevNode = currNode; 
        currNode = currNode.next;
      }
    }
  }
  
  insertBefore(item, key) {
    let currNode = this.find(key);
    let prevNode = this.findBefore(key);
    let newNode = new Node(item, currNode);
    prevNode.next = newNode;
  }

  insertAfter(item, key) {
    let currNode = this.find(key);
    let nextNode = currNode.next;
    let newNode = new Node(item, nextNode);
    currNode.next = newNode;
  }

  findByIdx(idx) {
    let currNode = this.head;
    let location = 0;

    while(location < idx) {
      currNode = currNode.next;
      location = location + 1;
    }
    return currNode;
  }

  insertAt(item, idx) {
    let currNode = this.findByIdx(idx);
    let nextNode = currNode.next;
    let newNode = new Node(item, nextNode);

    currNode.next = newNode;
  }

  findBefore(item) { 
    let currNode = this.head;
    let prevNode = null;
    
    if (!this.head) {
      return null;
    }
    
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      }
      else {
        prevNode = currNode; 
        currNode = currNode.next;
      }
    }
    
    return prevNode;
  }

  find(item) { 
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item 
    while (currNode.value !== item) {
      /* Return null if it's the end of the list 
           and the item is not on the list */
      if (currNode.next === null) {
        return null;
      }
      else {
        // Otherwise, keep looking 
        currNode = currNode.next;
      }
    }
    // Found it
    return currNode;
  }

  //pointing the head to the node item
  insertFirst(item) {
    this.head = new Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new Node(item, null);
    }
  }

  remove(item){ 
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      // Save the previous node 
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
}


// 2. Creating a singly linked list
function main() {

  //Creating it
  let node1 = new Node('Apollo', null);
  let node2 = new Node('Boomer', null);
  let node3 = new Node('Helo', null);
  let node4 = new Node('Husker', null);
  let node5 = new Node('Starbuck', null);
  

  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;
  
  let SLL = new LinkedList(node1);


  // Adding and Removing Nodes
  SLL.insertFirst('Tauhida');
  //SLL.remove('squirrel');
  SLL.insertBefore('Athena', 'Boomer');
  SLL.insertAfter('Hotdog', 'Helo');
  SLL.insertAt('Kat', 3);
  SLL.remove('Tauhida');

  // console.log('head: ', SLL.head.value);
  // console.log('second: ', SLL.head.next.value);
  // console.log('third: ', SLL.head.next.next.value);
  // console.log('fourth: ', SLL.head.next.next.next.value);
  // console.log('fifth: ', SLL.head.next.next.next.next.value);
  // console.log('sixth: ', SLL.head.next.next.next.next.next.value);
  // console.log('seventh: ', SLL.head.next.next.next.next.next.next.value);


  // 3. Supplemental Functions
  function display(head) {
    let currNode = head;

    while (currNode !== null) {
      console.log(currNode.value);
      currNode = currNode.next;
    }
  }
  //display(SLL.head);

  function size(head) {
    let currNode = head;
    let count = 0;
    while (currNode !== null) {
      count = count + 1;
      currNode = currNode.next;
    }
    return count;
  }
  // let length = size(SLL.head);
  // console.log(length);


  //4. Mystery Program
  function WhatDoesThisProgramDo(lst) {
    let current = lst.head;
    while (current !== null) {
      let newNode = current;
      while (newNode.next !== null) {
        if (newNode.next.value === current.value) {
          newNode.next = newNode.next.next;
        }
        else {
          newNode = newNode.next;
        }
      }
      current = current.next;
    }
  };
  //The function's complexity is O(n). 
  //It give every node in the list the same value as the head.


  // 5. Reverse a list
  

  function reverseList(head) {
    let currNode = head;
    let arr = [];

    while (currNode !== null) {
      arr.push(currNode.value); 
      currNode = currNode.next;
    }

    let headNode = new Node(arr[0], null);
    let reversed = new LinkedList(headNode);

    for (let x = 1; x < arr.length; x++) {
      reversed.head = new Node(arr[x], reversed.head);
    }

    return reversed;
  }

  // let reversed = reverseList(SLL.head);
  // console.log(reversed);


  // 6. 3rd from the end

  // let thirdToLast = SLL.threeFromEnd();
  // console.log(thirdToLast);


  // 7. Middle of List

  // let middleElement = SLL.findMiddle();
  // console.log('middle element');
  // console.log(middleElement);
  // console.log(` \n \n diplaying list`);
  // console.log(display(SLL.head));


  // 8. Cycle in a list
  let anode1 = new Node('first', null);
  let anode2 = new Node('second', null);
  let anode3 = new Node('third', null);
  let anode4 = new Node('fourth', null);
  let anode5 = new Node('fifth', null);

  anode1.next = anode2;
  anode2.next = anode3;
  anode3.next = anode4;
  anode4.next = anode5;
  anode5.next = anode1;
  
  let cycleList = new LinkedList(anode1);

  function doesItCycle(head) {
    let currNode = head;
    let obj = {};
    let objVal = currNode.value;

    if (head === null) {
      return 'There is no list';
    }
    if (currNode === null) {
      return 'The list does not cycle';
    }
    while (currNode !== null) {
      if(!obj[objVal]) {
        obj[objVal] = objVal;
        currNode = currNode.next;
      } else {
        return 'The list cycles';
      }
    }
  }

  //console.log(doesItCycle(cycleList.head));
  
}



main();