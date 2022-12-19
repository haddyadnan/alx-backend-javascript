export default function iterateThroughObject(reportWithIterator) {
  const employee = [];
  for (const e of reportWithIterator) {
    employee.push(e);
  }
  return employee.join(' | ');
}
