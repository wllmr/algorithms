function binarySearch(arr, target, low = 0, high = arr.length - 1) {
  if (low > high) {
    // Target not found
    return -1;
  }

  const mid = Math.floor((low + high) / 2);

  if (arr[mid] === target) {
    // Target found
    return mid;
  } else if (arr[mid] > target) {
    // Search left half
    return binarySearch(arr, target, low, mid - 1);
  } else {
    // Search right half
    return binarySearch(arr, target, mid + 1, high);
  }
}

module.exports = binarySearch;
