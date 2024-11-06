/**
 * Helper function to remove all childs in a node.
 * 
 * @param {HTMLElement} node
 */
export function removeAllChilds(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}
