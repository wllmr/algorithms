function bubbleSort(arr) {
  let swapped;

  do {
    // Set to false, break loop if nothing else to swap
    swapped = false;
    // Compare item i with i+1 for the whole array
    for (let i = 0; i < arr.length - 1; i++) {
      // If i+1 is larger then i
      if (arr[i] > arr[i + 1]) {
        // Then swap adjacent elements
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

module.exports = bubbleSort;
