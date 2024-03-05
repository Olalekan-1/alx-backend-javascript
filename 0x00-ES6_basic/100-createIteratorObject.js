export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  const arr = [];

  for (const key in departments) {
    if (Object.prototype.hasOwnProperty.call(departments, key)) {
      departments[key].forEach((element) => {
        arr.push(element);
      });
    }
  }
  const iterator = arr[Symbol.iterator]();
  return iterator;
}
