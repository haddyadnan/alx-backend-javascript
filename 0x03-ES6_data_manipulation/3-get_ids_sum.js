export default function getStudentIdsSum(arr) {
  return arr.map((a) => a.id).reduce((a, c) => a + c);
}
