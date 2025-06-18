import { Node } from "./node";

export class LinkedList<T> {
  head: Node<T> | null = null;

  insertHead(value: T) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  insertMiddle(value: T, position: number) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    if (position < 1) {
      this.insertHead(value);
      return;
    }

    let current = this.head;
    while (current.next !== null && position > 1) {
      position--;
      current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode;
  }

  insertTail(value: T): void {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }

    current.next = newNode;
  }

  deleteFirst() {
    if (this.head) this.head = this.head?.next;
  }

  deleteAt(position: number): void {
    if (!this.head || position < 0) return;

    if (position === 0) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;

    while (current.next && --position > 0) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    }
  }

  deleteLast(): void {
    if (!this.head || !this.head.next) {
      this.head = null;
      return;
    }

    let current = this.head;
    while (current.next?.next) {
      current = current.next;
    }

    current.next = null;
  }

  printList() {
    let currentNode = this.head;
    while (currentNode) {
      console.log("Value", currentNode.value);
      currentNode = currentNode.next;
    }
  }

  getLength() {
    let count = 0;
    let currentNode = this.head;
    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }
    console.log("Length", count);
  }
}
