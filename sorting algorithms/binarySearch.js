function binarySearch(arr, target) {
    // Define the starting and ending indices
    let start = 0;
    let end = arr.length - 1;

    // Continue searching while the start index is less than or equal to the end index
    while (start <= end) {
        // Calculate the middle index
        let mid = Math.floor((start + end) / 2);

        // Check if the middle element is the target
        if (arr[mid] === target) {
            return mid; // Target found, return the index
        }
        // If the middle element is greater than the target, search in the left half
        else if (arr[mid] > target) {
            end = mid - 1;
        }
        // If the middle element is less than the target, search in the right half
        else {
            start = mid + 1;
        }
    }

    // If the target is not found, return -1
    return -1;
}

// Example usage:
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const target = 11;
const result = binarySearch(arr, target);

if (result !== -1) {
    console.log(`Element found at ${result}`);
} else {
    console.log('Element not found');
}
