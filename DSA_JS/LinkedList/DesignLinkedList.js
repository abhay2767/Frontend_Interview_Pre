/* 707. Design Linked List
Solved
Medium
Topics
premium lock icon
Companies
Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

Implement the MyLinkedList class:

MyLinkedList() Initializes the MyLinkedList object.
int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
void addAtTail(int val) Append a node of value val as the last element of the linked list.
void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.
void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.
 

Example 1:

Input
["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
[[], [1], [3], [1, 2], [1], [1], [1]]
Output
[null, null, null, null, 2, null, 3]

Explanation
MyLinkedList myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(3);
myLinkedList.addAtIndex(1, 2);    // linked list becomes 1->2->3
myLinkedList.get(1);              // return 2
myLinkedList.deleteAtIndex(1);    // now the linked list is 1->3
myLinkedList.get(1);              // return 3
 

Constraints:

0 <= index, val <= 1000
Please do not use the built-in LinkedList library.
At most 2000 calls will be made to get, addAtHead, addAtTail, addAtIndex and deleteAtIndex. */

// javascript
function Node(val) {
    this.val = val;
    this.next = null;
}

function MyLinkedList() {
    this.head = null;
    this.size = 0;
}

// Get value at a specific index
MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.size) return -1;

    let curr = this.head;

    for (let i = 0; i < index; i++) {
        curr = curr.next;
    }

    return curr.val;
};

// Add node at the beginning
MyLinkedList.prototype.addAtHead = function (val) {
    let newNode = new Node(val);

    newNode.next = this.head;
    this.head = newNode;

    this.size++;
};

// Add node at the end
MyLinkedList.prototype.addAtTail = function (val) {
    let newNode = new Node(val);

    if (this.head === null) {
        this.head = newNode;
    } else {
        let curr = this.head;

        while (curr.next !== null) {
            curr = curr.next;
        }

        curr.next = newNode;
    }

    this.size++;
};

// Add node at a specific index
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index < 0) index = 0;

    if (index > this.size) return;

    if (index === 0) {
        this.addAtHead(val);
        return;
    }

    if (index === this.size) {
        this.addAtTail(val);
        return;
    }

    let newNode = new Node(val);
    let curr = this.head;

    for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
    }

    newNode.next = curr.next;
    curr.next = newNode;

    this.size++;
};

// Delete node at a specific index
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this.size) return;

    if (index === 0) {
        this.head = this.head.next;
        this.size--;
        return;
    }

    let curr = this.head;

    for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
    }

    curr.next = curr.next.next;

    this.size--;
};

// Display the linked list
MyLinkedList.prototype.printList = function () {
    let curr = this.head;
    let result = [];

    while (curr !== null) {
        result.push(curr.val);
        curr = curr.next;
    }

    console.log("Linked List:", result.join(" -> "), "-> null");
};

// Test the linked list
let list = new MyLinkedList();

list.addAtHead(10);
list.addAtTail(30);
list.addAtIndex(1, 20);

list.printList();
// Linked List: 10 -> 20 -> 30 -> null

console.log("Value at index 1:", list.get(1));
// Value at index 1: 20

list.deleteAtIndex(1);

list.printList();
// Linked List: 10 -> 30 -> null

console.log("Value at index 1:", list.get(1));
// Value at index 1: 30

console.log("List size:", list.size);
// List size: 2