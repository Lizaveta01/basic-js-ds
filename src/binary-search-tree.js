const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
      this.root = null;   //определяем корень дерева
  }

  root() {
      return this.root;
  }

  add(value) {
      this.root = addElemToTree(this.root, value);

      function addElemToTree(node, value) {
          if (!node) {
              return new Node(value);
          }

          if (node.data === value) {
              return node;
          }

          if (value < node.data) {
              node.left = addElemToTree(node.left, value);
          } else {
              node.right = addElemToTree(node.right, value);
          }

          return node;
      }
  }

  has(value) {
      return searchElemInTree(this.root, value);

      function searchElemInTree(node, value) {
          if (!node) {
              return false;
          }

          if (node.data === value) {
              return true;
          }

          if (value < node.data) {
              return searchElemInTree(node.left, value);
          } else {
              return searchElemInTree(node.right, value);
          }
      }
  }

  find(value) {
      return findInTree(this.root, value);

      function findInTree(node, value) {
          if (!node) {
              return null;
          }

          if (node.data === value) {
              return node;
          }

          if (value < node.data) {
              return findInTree(node.left, value);
          } else {
              return findInTree(node.right, value);
          }
      }
  }

  remove(value) {
      this.root = removeFromTree(this.root, value);

      function removeFromTree(node, value) {
          if (!node) {
              return null;
          }
          
          if (value < node.data) {
              node.left = removeFromTree(node.left, value);
              return node;
          } else if(value > node.data) {
              node.right = removeFromTree(node.right, value);
              return node;
          } else {
              if (!node.left && !node.right) {
                  return null;
              }

              if (!node.left) {
                  node = node.right;
                  return node;
              }

              if (!node.right) {
                  node = node.left;
                  return node;
              }

              let minFromRight = node.right;
              while(minFromRight.left) {
                  minFromRight = minFromRight.left;
              }
              node.data = minFromRight.data;
              node.right = removeFromTree(node.right, minFromRight.data);
              return node;
          }
      }
  }

  min() {
      if (!this.root) {
          return null;
      }

      let node = this.root;
      while(node.left) {
          node = node.left;
      }
      return node.data;
  }

  max() {
      if (!this.root) {
          return null;
      }

      let node = this.root;
      while(node.right) {
          node = node.right;
      }

      return node.data;
  }

}
// class BinarySearchTree {
//   constructor() {
//     this.root = null;
//   }

//   root() {
//     return this.root;
//   }

//   add(data) {
//    this.root = addWith(this.root, data);

//    function addWith(node, value) {
//      if (!node) {
//        return new Node(value);
//      }

//      if (node.value === value) {
//        return node;
//      }

//      if (value < node.value) {
//        node.left = addWith(node.left, value);
//      } else {
//        node.right = addWith(node.right, value);
//      }
//      return node
//    }
//   }

//   has(data) {
//     return searchEl(this.root, data);

//     function searchEl(node, value) {
//       if (!node) {
//         return false;
//       }

//       if(node.value === value) {
//         return true;
//       }

//       return value < node.value ? searchEl (node.left, value) : searchEl (node.right, value);
//     }
//   }

//   find(data) {
//     return findEl(this.root, data);

//     function findEl(node, value) {
//       if (!node) {
//         return null;
//       }

//       if (node.data === value) {
//         return node;
//       }

//       if (value < node.data) {
//         return findEl(node.left, value);
//       } else {
//         return findEl(node.right, value);
//       }
//     }
//   }

//   remove(data) {
//     this.root = removeEl(this.root, data);
    
//     function removeEl(node, value) {
//       if (!node) {
//         return null;
//       }

//       if (value < node.value) {
//         node.left = removeEl(node.left,value);
//         return node;
//       } else if (node.value < value) {
//         node.right = removeEl(node.right,value);
//         return node;
//       } else {
//         if (!node.left && !node.right){
//           return null;
//         }

//         if (!node.left) {
//           node = node.right;
//           return node;
//         }

//         if (!node.right) {
//           node = node.left;
//           return node;
//         }

//         let minRight = node.right;
//         while (minRight.left) {
//           minRight = minRight.left;
//         }

//         node.value = minRight.value;

//         node.right = removeEl(node.right, minRemove.value);

//         return node;
//       }
//     }
//   }

  

//   min() {
//    if (!this.root) {
//      return;
//    }

//    let node = this.root;
//    while (node.left) {
//      node = node.left;
//    }

//    return node.value;
//   }

//   max() {
//     if (!this.root) {
//       return;
//     }

//     let node = this.root;
//     while (node.right) {
//       node = node.right;
//     }

//     return node.value;
//   }
// }

module.exports = {
  BinarySearchTree
};