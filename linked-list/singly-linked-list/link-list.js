"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var node_1 = require("./node");
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
    }
    LinkedList.prototype.insertHead = function (value) {
        var newNode = new node_1.Node(value);
        newNode.next = this.head;
        this.head = newNode;
    };
    LinkedList.prototype.insertMiddle = function (value, position) {
        var newNode = new node_1.Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        if (position < 1) {
            this.insertHead(value);
            return;
        }
        var current = this.head;
        while (current.next !== null && position > 1) {
            position--;
            current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
    };
    LinkedList.prototype.insertTail = function (value) {
        var newNode = new node_1.Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        var current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    };
    LinkedList.prototype.printList = function () {
        var currentNode = this.head;
        while (currentNode) {
            console.log("Value", currentNode.value);
            currentNode = currentNode.next;
        }
    };
    LinkedList.prototype.getLength = function () {
        var count = 0;
        var currentNode = this.head;
        while (currentNode) {
            count++;
            currentNode = currentNode.next;
        }
        console.log("Length", count);
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
