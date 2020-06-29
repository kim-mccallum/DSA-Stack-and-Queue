class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  push(data) {
    //if the stack is empty, then the new one is the top
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }
    // if there are data already
    const node = new _Node(data, this.top);
    this.top = node;
  }
  pop() {
    // to remove the top, the pointer has to point to the next item and that next pointer becomes the top
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

module.exports = {
  Stack,
  _Node,
};
