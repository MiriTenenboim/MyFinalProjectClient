// import React, { useEffect } from 'react';

// class QuadTreeNode {
//   constructor(x, y) {
//     this.X = x;
//     this.Y = y;
//     this.Child1 = null;
//     this.Child2 = null;
//     this.Child3 = null;
//     this.Child4 = null;
//   }
// }

// class QuadTree extends React.Component {
//   findClosestNode(targetX, targetY) {
//     if (!this.props.root) {
//       return null;
//     }

//     let closestNode = this.props.root;
//     let closestDistance = this.calculateDistance(this.props.root.X, this.props.root.Y, targetX, targetY);

//     this.findClosestNodeRecursive(this.props.root, targetX, targetY, closestNode, closestDistance);

//     return closestNode;
//   }

//   findClosestNodeRecursive(node, targetX, targetY, closestNode, closestDistance) {
//     const distance = this.calculateDistance(node.X, node.Y, targetX, targetY);

//     if (distance < closestDistance) {
//       closestNode.X = node.X;
//       closestNode.Y = node.Y;
//       closestDistance = distance;
//     }

//     if (node.Child1) {
//       this.findClosestNodeRecursive(node.Child1, targetX, targetY, closestNode, closestDistance);
//     }
//     if (node.Child2) {
//       this.findClosestNodeRecursive(node.Child2, targetX, targetY, closestNode, closestDistance);
//     }
//     if (node.Child3) {
//       this.findClosestNodeRecursive(node.Child3, targetX, targetY, closestNode, closestDistance);
//     }
//     if (node.Child4) {
//       this.findClosestNodeRecursive(node.Child4, targetX, targetY, closestNode, closestDistance);
//     }
//   }

//   calculateDistance(x1, y1, x2, y2) {
//     const dx = x2 - x1;
//     const dy = y2 - y1;
//     return Math.sqrt(dx * dx + dy * dy);
//   }

//   render() {
//     console.log("find");
//     const closestNode = this.findClosestNode(this.props.targetX, this.props.targetY);
//     console.log("finish to find");
//     return (
//       <div>
//         Closest Node: X = {closestNode ? closestNode.X : null}, Y = {closestNode ? closestNode.Y : null}
//       </div>
//     );
//   }
// }

// // Example usage
// const rootNode = new QuadTreeNode(0, 0);
// const node1 = new QuadTreeNode(1, 1);
// const node2 = new QuadTreeNode(2, 2);
// const node3 = new QuadTreeNode(3, 3);
// const node4 = new QuadTreeNode(4, 4);
// const node5 = new QuadTreeNode(5, 5);
// rootNode.Child1 = node1;
// rootNode.Child2 = node2;
// rootNode.Child3 = node3;
// rootNode.Child4 = node4;
// node3.Child1 = node5;

// function QuadTreeMain() {
//   return (
//     <div className="App">
//       <QuadTree root={rootNode} targetX={4.5} targetY={4.5} />
//     </div>
//   );
// }

// export default QuadTreeMain;

// import React, { useEffect, useState } from 'react';
// var root;

// class QuadTreeNode {
//   constructor(x, y) {
//     this.X = x;
//     this.Y = y;
//     this.Child1 = null;
//     this.Child2 = null;
//     this.Child3 = null;
//     this.Child4 = null;
//   }
// }

// function QuadTree() {
//   const [closestNode, setClosestNode] = useState(null);
//   const [center, setCenter] = useState({});
//   var i = 0;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       //   navigator.geolocation.watchPosition(
//       //     position => setCenter({
//       //         lat: position.coords.latitude,
//       //         lng: position.coords.longitude
//       //     }),
//       //     error => console.log(error),
//       //     { enableHighAccuracy: true, maximumAge: 0, timeout: 5000 }
//       // );
//       // setCenter({ lat: (center.lat + 1), lng: (center.lng + 1) })
//       i++;
//       const node = findClosestNode(root, i, i);
//       // const node = findClosestNode(props.root, center.lat, center.lng);
//       // const node = findClosestNode(props.root, center.lat, center.lng);
//       // const node = findClosestNode(props.root, props.targetX, props.targetY);
//       setClosestNode(node);
//       console.log('This will run every second!');
//       console.log(i);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   function findClosestNode(node, targetX, targetY) {
//     if (!node) {
//       return null;
//     }

//     let closestNode = node;
//     let closestDistance = calculateDistance(node.X, node.Y, targetX, targetY);

//     findClosestNodeRecursive(node, targetX, targetY, closestNode, closestDistance);

//     return closestNode;
//   }

//   function findClosestNodeRecursive(node, targetX, targetY, closestNode, closestDistance) {
//     const distance = calculateDistance(node.X, node.Y, targetX, targetY);

//     if (distance < closestDistance) {
//       closestNode.X = node.X;
//       closestNode.Y = node.Y;
//       closestDistance = distance;
//     }

//     if (node.Child1) {
//       findClosestNodeRecursive(node.Child1, targetX, targetY, closestNode, closestDistance);
//     }
//     if (node.Child2) {
//       findClosestNodeRecursive(node.Child2, targetX, targetY, closestNode, closestDistance);
//     }
//     if (node.Child3) {
//       findClosestNodeRecursive(node.Child3, targetX, targetY, closestNode, closestDistance);
//     }
//     if (node.Child4) {
//       findClosestNodeRecursive(node.Child4, targetX, targetY, closestNode, closestDistance);
//     }
//   }

//   function calculateDistance(x1, y1, x2, y2) {
//     const dx = x2 - x1;
//     const dy = y2 - y1;
//     return Math.sqrt(dx * dx + dy * dy);
//   }
  
//   return (
//     <div>
//       Closest Node: X = {closestNode ? closestNode.X : null}, Y = {closestNode ? closestNode.Y : null}
//     </div>
//   );
// }

// // Example usage
// const rootNode = new QuadTreeNode(0, 0);
// const node1 = new QuadTreeNode(2, 1);
// const node2 = new QuadTreeNode(4, 4);
// const node3 = new QuadTreeNode(6, 6);
// const node4 = new QuadTreeNode(10, 10);
// const node5 = new QuadTreeNode(15, 15);
// rootNode.Child1 = node1;
// rootNode.Child2 = node2;
// rootNode.Child3 = node3;
// rootNode.Child4 = node4;
// node3.Child1 = node5;
// root = rootNode;

// // function QuadTreeMain(rootNode)
// function QuadTreeMain() {
//   return (
//     <div className="App">
//       <QuadTree />
//       {/* <QuadTree root={rootNode} targetX={0} targetY={0} /> */}
//     </div>
//   );
// }

// export default QuadTreeMain;


import React, { useEffect, useState } from 'react';

class QuadTreeNode {
  constructor(x, y) {
    this.X = x;
    this.Y = y;
    this.Child1 = null;
    this.Child2 = null;
    this.Child3 = null;
    this.Child4 = null;
  }
}

function QuadTree() {
  var i =0;
  const [closestNode, setClosestNode] = useState(null);
  // const [center, setCenter] = useState({});
  var center;

  useEffect(() => {
    center = { X: rootNode.X, Y: rootNode.Y };

    const interval = setInterval(() => {
      i++;
      center = { X: i, Y: i };
      const node = findClosestNode(rootNode,center.X,center.Y);
      console.log(center.X,center.Y);
      setClosestNode(node);
      console.log('This will run every second!');
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  function findClosestNode(node, targetX, targetY) {
    if (!node) {
      return null;
    }
  
    let closestNode = node;
    let closestDistance = calculateDistance(node.X, node.Y, targetX, targetY);
  
    findClosestNodeRecursive(node, targetX, targetY, closestNode, closestDistance);
  
    return closestNode;
  }
  
  function findClosestNodeRecursive(node, targetX, targetY, closestNode, closestDistance) {
    const distance = calculateDistance(node.X, node.Y, targetX, targetY);
  
    if (distance < closestDistance) {
      closestNode.X = node.X;
      closestNode.Y = node.Y;
      closestDistance = distance;
    }
  
    if (node.Child1) {
      const childClosestNode = findClosestNode(node.Child1, targetX, targetY);
      if (childClosestNode) {
        const childDistance = calculateDistance(childClosestNode.X, childClosestNode.Y, targetX, targetY);
        if (childDistance < closestDistance) {
          closestNode = childClosestNode;
          closestDistance = childDistance;
        }
      }
    }
    if (node.Child2) {
      const childClosestNode = findClosestNode(node.Child2, targetX, targetY);
      if (childClosestNode) {
        const childDistance = calculateDistance(childClosestNode.X, childClosestNode.Y, targetX, targetY);
        if (childDistance < closestDistance) {
          closestNode = childClosestNode;
          closestDistance = childDistance;
        }
      }
    }
    if (node.Child3) {
      const childClosestNode = findClosestNode(node.Child3, targetX, targetY);
      if (childClosestNode) {
        const childDistance = calculateDistance(childClosestNode.X, childClosestNode.Y, targetX, targetY);
        if (childDistance < closestDistance) {
          closestNode = childClosestNode;
          closestDistance = childDistance;
        }
      }
    }
    if (node.Child4) {
      const childClosestNode = findClosestNode(node.Child4, targetX, targetY);
      if (childClosestNode) {
        const childDistance = calculateDistance(childClosestNode.X, childClosestNode.Y, targetX, targetY);
        if (childDistance < closestDistance) {
          closestNode = childClosestNode;
          closestDistance = childDistance;
        }
      }
    }
  }  

  function calculateDistance(x1, y1, x2, y2) {
    console.log(x1,y1);
    console.log(x2,y2);
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
  }
  
  return (
    <div>
      Closest Node: X = {closestNode ? closestNode.X : null}, Y = {closestNode ? closestNode.Y : null}
    </div>
  );
}

// Example usage
const rootNode = new QuadTreeNode(0, 0);
const node1 = new QuadTreeNode(2, 1);
const node2 = new QuadTreeNode(4, 4);
const node3 = new QuadTreeNode(6, 6);
const node4 = new QuadTreeNode(10, 10);
const node5 = new QuadTreeNode(15, 15);
rootNode.Child1 = node1;
rootNode.Child2 = node2;
rootNode.Child3 = node3;
rootNode.Child4 = node4;
node3.Child1 = node5;

function QuadTreeMain() {
  return (
    <div className="App">
      <QuadTree />
    </div>
  );
}

export default QuadTreeMain;
