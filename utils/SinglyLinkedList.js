export class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

export class SingleLinkedList {
    constructor() {
        this.head = null;
        this.size = null;
    }

    push(val) {
        const newListNode = new ListNode(val);
        if (!this.head) {
            this.head = newListNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newListNode;
        }
        this.size++;
        return true;
    }
    insertAtStart(val) {
        const newListNode = new ListNode(val);
        newListNode.next = this.head;
        this.head = newListNode;
        this.size++;
        return true;
    }
    insertAt(idx, val) {
        if (idx < 0 || idx > this.size) {
            console.log("Out of bounds.");
            return false;
        }
        if (idx === 0) return this.insertAtStart(val);
        if (idx === this.size) return this.push(val);
        const newListNode = new ListNode(val);
        let current = this.head;

        if (!current) this.insertAtStart(val);
        let count = 0;
        while (count < idx - 1) {
            current = current.next;
            count++;
        }
        let temp = current.next;
        current.next = newListNode;
        newListNode.next = temp;
        return true;
    }
    pop() {
        if (!this.head) return -1;
        let current = this.head;
        let temp = current;
        while (current.next) {
            temp = current;
            current = current.next;
        }
        temp.next = null;
        this.size--;
        return true;
    }
    deleteFromStart() {
        if (!this.head) return -1;
        if (this.size === 1) return this.pop();
        this.head = this.head.next;
        this.size--;
        return true;
    }
    deleteFrom(idx) {
        if (idx > this.size || idx < 0) return false;
        if (idx === this.size) return this.pop();
        if (idx === 1) return this.deleteFromStart();
        let current = this.head;
        let count = 1;
        let prev = current;
        while (count < idx) {
            prev = current;
            current = current.next;
            count++;
        }
        console.log(prev, current);
        prev.next = current.next;
        this.size--;
        return true;
    }
    search(val) {
        if (this.size < 1) return -1;
        let current = this.head;
        let count = 1;
        while (current) {
            if (current.val === val) {
                return count;
            }
            count++;
            current = current.next;
        }

        return -1;
    }
    reverse() {
        if (!this.head || !this.head.next) {
            // Handle empty or single-Listnode list
            return;
        }

        let prev = null;
        let current = this.head;

        while (current) {
            let tempNext = current.next; // track the record of next Listnode
            current.next = prev;
            prev = current;
            current = tempNext;
        }
        this.head = prev;
    }
    print() {
        let current = this.head;
        if (!current) return -1;
        const arr = [];
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
}
