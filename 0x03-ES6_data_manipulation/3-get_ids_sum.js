export default function getStudentIdsSum(studData) {
  if (!Array.isArray(studData)) {
    throw new Error('The first argument must be an array of student object.');
  }
  const ids = studData.map((obj) => obj.id);
  const sum = ids.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return sum;
}
