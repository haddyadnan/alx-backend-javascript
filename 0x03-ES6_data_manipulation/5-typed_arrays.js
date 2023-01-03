export default function createInt8TypedArray(length, pos, value) {
  const buff = new ArrayBuffer(length);
  const int8View = new Int8Array(buff);

  if (pos > length) {
    throw new Error('Position outside range');
  }
  for (let i = 0; i < int8View.length; i += 1) {
    if (i === pos) {
      int8View[i] = value;
    }
  }
  return new DataView(buff);
}
