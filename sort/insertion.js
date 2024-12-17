function insertionSort(arr) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    // Select the current element to be inserted
    let key = arr[i];
    let j = i - 1;

    // Shift elements of the sorted portion that are greater than the key
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Insert the key at the correct position
    arr[j + 1] = key;
  }

  return arr;
}

module.exports = insertionSort;
