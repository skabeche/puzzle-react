/**
 * Helper function to remove all childs in a node.
 * 
 * @param {HTMLElement} node
 */
export function removeAllChilds(node) {
 if (node === null) return;

  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}
