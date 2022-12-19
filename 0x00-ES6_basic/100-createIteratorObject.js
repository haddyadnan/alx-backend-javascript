export default function createIteratorObject(report) {
  const employee = [];
  for (const e of Object.values(report.allEmployees)) {
    employee.push(...e);
  }
  return employee;
}
