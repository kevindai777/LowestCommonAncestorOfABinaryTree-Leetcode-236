//Objective is to find the lowest common ancestor between to values in a binary tree.

class Node {
    constructor(left, right, val) {
      this.left = left
      this.right = right
      this.val = val
    }
}
  
class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(val) {
      this.root = new Node(null, null, val)
    }
  
    addLeftNode(node, val) {
      node.left = new Node(null, null, val)
    }
  
    addRightNode(node, val) {
      node.right = new Node(null, null, val)
    }
}

let tree = new Tree()
tree.createRoot(5)
tree.addLeftNode(tree.root, 4)
tree.addRightNode(tree.root, 8)
tree.addLeftNode(tree.root.left, 11)
tree.addLeftNode(tree.root.left.left, 7)
tree.addRightNode(tree.root.left.left, 2)
tree.addLeftNode(tree.root.right, 13)
tree.addRightNode(tree.root.right, 4)
tree.addRightNode(tree.root.right.right, 1)


//O(n) solution that does a dfs traversal of the tree to find the lowest
//common ancestor. Here, p and q are two nodes in the tree.

let ans = null
    
function dfs(node, p, q) {
    if (!node) {
        return false
    }
        
    let left = dfs(node.left, p, q) ? 1 : 0
    let right = dfs(node.right, p, q) ? 1 : 0
        
    let mid = (node == p || node == q) ? 1 : 0
        
    if (mid + left + right >= 2) {
        ans = node
    }
        
    return (mid + left + right > 0)
}
dfs(tree.root, p, q)
    
return ans