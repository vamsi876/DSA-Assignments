function deleteBinaryTree(root) {
    if (!root) {
      return;
    }
    let rootlength = 0
    let queue = [];
    queue.push(root);
    while (queue.length) {
      let currentNode = queue.shift();
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
      currentNode = null;
    }
    
  }


const root = {
   value: 1,
  left: {
    value: 2,
    left: { value: 4 },
    right: { value: 5 }
  },
  right: {
    value: 3,
    left: { value: 6 },
    right: { value: 7 }
  }
};
console.log(root)


const test = deleteBinaryTree(root);
console.log(test)
  
