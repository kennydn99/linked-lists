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

  head() {
    return this.head;
  }

  tail() {
    if (this.head === null) return this.head;
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  at(index) {
    if (index >= this.size() || index < 0) return "Out of bounds";
    let currIndex = 0;
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currIndex === index) {
        return currentNode;
      }
      currentNode = currentNode.next;
      currIndex++;
    }
  }

  pop() {
    if (this.head === null) {
      return "LinkedList is empty, nothing to pop";
    } else if (this.size() === 1) {
      this.head = null;
    } else {
      let currentNode = this.head;
      while (currentNode.next.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = null;
    }
  }

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
