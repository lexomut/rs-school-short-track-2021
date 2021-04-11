const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.node = new ListNode();
    this.new = this.node;
  }

  get size() {
    throw new Error('Not implemented');
  }

  enqueue(element) {
    this.new.next = new ListNode();
    this.new.value = element;
    this.new = this.new.next;
  }

  dequeue() {
    const result = this.node.value;

    this.node.value = this.node.next.value;

    this.node.next = this.node.next.next;
    return result;
  }
}

module.exports = Queue;
