export default function cleanSet(set, startString) {
  const cleanedValues = [];

  if (startString === '') {
    return '';
  }

  for (const value of set) {
    if (value.startsWith(startString)) {
      cleanedValues.push(value.slice(startString.length));
    }
  }
  return cleanedValues.join('-');
}
