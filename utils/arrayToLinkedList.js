export class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
export function arrayToLinkedList(arr) {
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

// let arr = [1, 2, 3, 4, 5];
// const res = arrayToLinkedList(arr);
