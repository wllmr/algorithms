function jumpSearch(arr, target) {
  let n = arr.length;
  let step = Math.floor(Math.sqrt(n)); // Block size to jump
  let prev = 0;

  // Jump until target is within the range or end of array
  while (arr[Math.min(step, n) - 1] < target) {
    prev = step;
    step += Math.floor(Math.sqrt(n));
    if (prev >= n) return -1; // Target not found
  }

  // Linear search within the block
  for (let i = prev; i < Math.min(step, n); i++) {
    if (arr[i] === target) return i;
  }

  return -1; // Target not found
}

module.exports = jumpSearch;
