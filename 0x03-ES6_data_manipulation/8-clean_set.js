export default function cleanSet(set, startString) {
  if (startString.length === 0 || !(set instanceof Set) || (typeof startString !== 'string')) {
    return '';
  }
  let str = '';
  for (const item of set) {
    if (item.startsWith(startString)) {
      str += item.replace(startString, '-');
    }
  }
  return str.slice(1);
}
