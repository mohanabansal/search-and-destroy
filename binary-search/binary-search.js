'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	let flag = false;
	let mid = Math.floor(array.length/2);
	console.log("first mid", array[mid])
	let low = 0;
	let high = array.length-1;
	console.log("low", low, "high", high)
	while(array[mid] !== target && low <= high) {
		console.log("inside while")
		if( array[mid] < target) {
			high = mid-1;
		}else {
			low = mid+1;
		}
		console.log("final mid", array[mid])
		mid = Math.floor((low+high)/2);
	}
	if(array[mid] === target) return true
	else return false
	// return false
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
