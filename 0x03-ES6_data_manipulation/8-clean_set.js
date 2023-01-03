export default function cleanSet(set, startString) {
  let str = '';
  if (startString === '') {
    return '';
  }
  for (const item of set) {
    if (item.startsWith(startString)) {
      str += item.replace(startString, '-');
    }
  }
  return str.slice(1);
}
