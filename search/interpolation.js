function interpolationSearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high && target >= arr[low] && target <= arr[high]) {
    // Estimate the position
    const pos =
      low +
      Math.floor(((target - arr[low]) * (high - low)) / (arr[high] - arr[low]));

    // If target found
    if (arr[pos] === target) return pos;

    // If target is larger, it is in the upper range
    if (arr[pos] < target) {
      low = pos + 1;
    }
    // If target is smaller, it is in the lower range
    else {
      high = pos - 1;
    }
  }

  return -1; // Target not found
}

module.exports = interpolationSearch;
