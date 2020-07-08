// Given a pointer to the head node of a linked list, print its elements in order, one element per line. If the head pointer is null (indicating the list is empty), don’t print anything.

const SinglyLinkedListNode = class {
  constructor(nodeData) {
      this.data = nodeData;
      this.next = null;
  }
};

function printLinkedList(current) {
  while(current) {
      console.log(current.data);
      current = current.next;
  }
}

// You are given the pointer to the head node of a linked list and an integer to add to the list. Create a new node with the given integer. Insert this node at the tail of the linked list and return the head node of the linked list formed after inserting this new node. The given head pointer may be null, meaning that the initial list is empty.

const SinglyLinkedListNode = class {
  constructor(nodeData) {
      this.data = nodeData;
      this.next = null;
  }
};

function insertNodeAtTail(head, int) {
  let node = new SinglyLinkedListNode(int);
  if(head == null) {
      return node;
  }
  let current = head;
  while(current.next) {
      current = current.next;
  }
  current.next = node;
  return head;
};