import LinkedList from "./linkedList.js";

const linkedList = new LinkedList();
linkedList.append("koda");
linkedList.prepend("kenny");
linkedList.append("dinky");
linkedList.prepend("bella");
linkedList.append("pinky");
linkedList.prepend("cookie");
linkedList.append("boots");

// console.log(linkedList);
console.log(linkedList.toString());
console.log("Size of linkedList is: ", linkedList.size());
console.log("head is: ", linkedList.head);
console.log("tail is: ", linkedList.tail());
console.log("Node at index of 2: ", linkedList.at(2));
linkedList.pop();

console.log(linkedList.toString());
