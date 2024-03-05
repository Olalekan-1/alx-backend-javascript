export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  const next = () => {
    const department = departments[currentDepartmentIndex];
    if (currentEmployeeIndex >= department.length) {
      currentEmployeeIndex = 0;
      currentDepartmentIndex++;
    }

    if (currentDepartmentIndex >= departments.length) {
      return { done: true };
    }

    const employee = department[currentEmployeeIndex];
    currentEmployeeIndex++;

    return { value: employee, done: false };
  };

  return {
    next,
    [Symbol.iterator]() {
      return this;
    },
  };
}

