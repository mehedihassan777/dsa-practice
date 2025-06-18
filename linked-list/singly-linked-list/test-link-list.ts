import { LinkedList } from "./link-list";

const list = new LinkedList<number>();

list.insertHead(10);
list.insertHead(20);
list.insertTail(30);
list.insertMiddle(40, 1);
list.insertMiddle(50, 1);
// list.deleteFirst();
// list.deleteAt(3);
// list.deleteLast();

list.getLength();
list.printList();
