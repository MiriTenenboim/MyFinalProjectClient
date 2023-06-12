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

var i = 0;


const LinkedListSearch = () => {
  const [center,setCenter] = useState({});
  useEffect(() => {
    navigator.geolocation.watchPosition(
                position => setCenter({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                }),
                error => console.log(error),
                { enableHighAccuracy: true, maximumAge: 0, timeout: 5000 }
            );
    const searchClosestNode = () => {
      // Perform your search logic here
      // Assuming you have a variable named "rootNode" pointing to the root of the linked list

      let closestNode = null;
      let closestDistance = Infinity;

      const traverse = (node) => {
        if (node === null) {
          return;
        }

        const distance = Math.sqrt((node.X - currentX) ** 2 + (node.Y - currentY) ** 2);

        if (distance < closestDistance) {
          closestNode = node;
          closestDistance = distance;
        }

        traverse(node.Child1);
        traverse(node.Child2);
        traverse(node.Child3);
        traverse(node.Child4);
      };

      const currentX = i; // Example X coordinate sent this time
      const currentY = i; // Example Y coordinate sent this time

      

      traverse(rootNode);

      console.log(i);
      console.log('Closest Node:', closestNode);
      i++;
    };

    const interval = setInterval(searchClosestNode, 5000); // Call the function every 5 seconds

    return () => {
      clearInterval(interval); // Clean up the interval when the component unmounts
    };
  }, [center]);

  // Define your root node here or assign it from somewhere else in your application
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
  rootNode.Child1.Child1 = node5;

  return <div>LinkedListSearch component</div>;
};

export default LinkedListSearch;
