import LinkedList from "./linkedList.js";

const linkedList = new LinkedList();
linkedList.append("koda");
linkedList.prepend("kenny");
linkedList.append("dinky");
linkedList.prepend("bella");
linkedList.append("pinky");

// console.log(linkedList);
console.log(linkedList.toString());
console.log("Size of linkedList is: ", linkedList.size());
