import { heapSort } from './heapSort';

let test = [1, 2, 4, 3]
function ascending(a, b) { return a - b; }
function descending(a, b) { return -ascending(a, b); }


let sort = new heapSort([1, 2, 4, 3], descending);
sort.sort();
console.log(sort.getResult())