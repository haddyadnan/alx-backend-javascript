export default function getListStudentIds(arr) {
  if ((arr instanceof Array)) {
    return arr.map((a) => a.id);
  }
  return [];
}