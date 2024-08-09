import LinkedList from "./linkedList.js";

const linkedList = new LinkedList();
linkedList.append("koda");
linkedList.prepend("kenny");
linkedList.append("dinky");
linkedList.prepend("bella");
linkedList.append("pinky");
linkedList.prepend("cookie");
linkedList.append("boots");

console.log(linkedList.toString());
console.log("Size of linkedList is: ", linkedList.size());
console.log("head is: ", linkedList.head);
console.log("tail is: ", linkedList.tail());
console.log("Node at index of 2: ", linkedList.at(2));
linkedList.pop();
console.log(linkedList.toString());
console.log("Does linkedList contain 'apple'? ", linkedList.contains("apple"));
console.log("Does linkedList contain 'koda'? ", linkedList.contains("koda"));
console.log("Find index of 'koda': ", linkedList.find("koda"));
console.log("Find index of 'apple': ", linkedList.find("apple"));
console.log("Insert tai at index 6...", linkedList.insertAt("tai", 6));
console.log(linkedList.toString());
console.log("Removing node at index 2...", linkedList.removeAt(4));
console.log(linkedList.toString());
