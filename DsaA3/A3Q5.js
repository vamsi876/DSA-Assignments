function deleteBinaryTree(root) {
    if (!root) {
      return;
    }
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
  
