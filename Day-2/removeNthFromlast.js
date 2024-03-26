/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    // Solution 1
    /*     let dummy = new ListNode(null);
    dummy.next = head;

    let slow = dummy;
    let fast = dummy;
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }
    while (fast.next != null) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;

    return dummy.next; */

    // Solution 2
    let fast = head,
        slow = head;
    for (let i = 0; i < n; i++) fast = fast.next;
    if (!fast) return head.next;
    while (fast.next) (fast = fast.next), (slow = slow.next);
    slow.next = slow.next.next;
    return head;
};

// 1 2 3 4 5

let l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(3);
l1.next.next.next = new ListNode(4);
l1.next.next.next.next = new ListNode(5);

console.log(removeNthFromEnd(l1, 2));
