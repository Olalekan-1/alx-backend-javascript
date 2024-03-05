export default function appendToEachArrayValue(array, appendString) {
  let index = 0;
  for (const value of array) {
    array[index + 1] = appendString + value;
  }

  return array;
}
