class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function arrayToLinkedList(arr) {
    if (arr.length === 0) return null; // Handle empty array
    let list = new ListNode(arr[0]);
    let dummy = list;
    arr.shift();

    for (let val of arr) {
        dummy.next = new ListNode(val);
        dummy = dummy.next;
    }
    return list;
}

var reverseList = function (head) {
    if (!head || !head.next) return;

    let prev = null;
    while (head) {
        let temp = head.next;
        head.next = prev;
        prev = head;
        head = temp;
    }
    return prev;
};

const head = [1, 2, 3, 4, 5];
const list = arrayToLinkedList(head);
console.log(reverseList(list));
