class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  class BST {
    constructor() {
      this.root = null;
    }
  
    delete(val) {
      this.root = this._deleteNode(this.root, val);
    }
  
    _deleteNode(node, val) {
      if (!node) {
        return null;
      }
  
      if (val < node.val) {
        node.left = this._deleteNode(node.left, val);
      }
      else if (val > node.val) {
        node.right = this._deleteNode(node.right, val);
      }
      else {
        if (!node.left && !node.right) {
          return null;
        }
        else if (!node.left || !node.right) {
          return node.left || node.right;
        }
        else {
          let minRightNode = this._findMin(node.right);
          node.val = minRightNode.val;
          node.right = this._deleteNode(node.right, minRightNode.val);
        }
      }
      return node;
    }
  
    _findMin(node) {
      while (node.left) {
        node = node.left;
      }
      return node;
    }
  }
  
