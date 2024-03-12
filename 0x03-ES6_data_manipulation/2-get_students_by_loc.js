export default function getStudentsByLocation(studData, city) {
  if (!Array.isArray(studData)) {
    throw new Error('The first argument must be an array.');
  }

  const newArr = studData.filter((obj) => obj.location === city);
  return newArr;
}
