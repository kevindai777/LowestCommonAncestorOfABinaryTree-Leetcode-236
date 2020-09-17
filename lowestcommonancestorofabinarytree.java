//Java Solution

class Solution {
    
    TreeNode ans = null;
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        dfs(root, p, q);
        
        return ans;
    }
    
    public int dfs(TreeNode node, TreeNode p, TreeNode q) {
        if (node == null) {
            return 0;
        }
        
        int left = dfs(node.left, p, q) == 1 ? 1 : 0;
        int right = dfs(node.right, p, q) == 1 ? 1 : 0;
        int mid = (node == p || node == q) ? 1 : 0;
        
        if (left + right + mid >= 2) {
            ans = node;
        }
        
        return left + right + mid > 0 ? 1 : 0;
    }
}