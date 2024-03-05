export default function appendToEachArrayValue(array, appendString) {
  let index = 0;
  const arr = [];
  for (const value of array) {
    arr[index] = appendString + value;
    index += 1;
  }

  return arr;
}
