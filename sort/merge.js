// Helper function to merge two sorted arrays
function merge(left, right) {
  const result = [];
  let i = 0,
    j = 0;

  // Compare elements from both arrays and add the smaller one to the result
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Add any remaining elements from the left array
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  // Add any remaining elements from the right array
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}

function mergeSort(arr) {
  // Base case: if the array has 1 or no elements, it's already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Divide the array into two halves
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Recursively sort both halves
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

module.exports = mergeSort;
