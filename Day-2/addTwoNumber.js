/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

import { ListNode } from "../utils/SinglyLinkedList.js";

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let dummy = new ListNode();
    let curr = dummy;
    let carry = 0;
    while (l1 || l2 || carry) {
        // let sum = carry;
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        curr.next = new ListNode(sum % 10);
        carry = Math.floor(sum / 10);
        curr = curr.next;
    }

    return dummy.next;
};

let l1 = new ListNode(9);
l1.next = new ListNode(9);
l1.next.next = new ListNode(9);
l1.next.next.next = new ListNode(9);
let l2 = new ListNode(9);
l2.next = new ListNode(9);
l2.next.next = new ListNode(9);

const res = addTwoNumbers(l1, l2);
console.log(res);
