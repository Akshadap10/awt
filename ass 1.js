function checkSortingOrder(arr) {
const ascending = arr.slice().sort((a, b) =&gt; a - b);
const descending = arr.slice().sort((a, b) =&gt; b - a);
if (JSON.stringify(arr) === JSON.stringify(ascending)) {
return 1;
} else if (JSON.stringify(arr) === JSON.stringify(descending)) {
 return -1;
} else {
 return 0;
 }
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [5, 4, 3, 2, 1];
const array3 = [3, 1, 4, 2, 5];

console.log(checkSortingOrder(array1));
console.log(checkSortingOrder(array2));
console.log(checkSortingOrder(array3));