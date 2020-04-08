'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
  let slow = linkedlist.head;
  let fast = linkedlist.head;
  while(true) {
    slow = slow.next;
    if(fast.next !== null) {
      fast = fast.next.next;
    }else {
      return false;
    }
    if(slow === null || fast === null) {
      return false
    }
    if(slow == fast) {
      return true
    }
  }
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop
