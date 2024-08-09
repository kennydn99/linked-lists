import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  test() {
    console.log("test");
  }

  append(value) {
    const newNode = new Node();
    newNode.value = value;

    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node();
    newNode.value = value;

    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  size() {
    let numNodes = 0;
    let currentNode = this.head;
    while (currentNode !== null) {
      numNodes++;
      currentNode = currentNode.next;
    }
    return numNodes;
  }

  head() {}

  tail() {}

  at(index) {}

  pop() {}

  contains(value) {}

  find(value) {}

  toString() {
    let output = "";
    let currentNode = this.head;
    while (currentNode !== null) {
      output += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.next;
    }
    return (output += `null`);
  }

  insertAt(value, index) {}

  removeAt(index) {}
}
