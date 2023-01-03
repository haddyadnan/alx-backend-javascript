export default function hasValuesFromArray(set, arr) {
  return arr.every((a) => set.has(a));
}
