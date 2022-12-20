export default function guardrail(func) {
  const queue = [];
  try {
    const val = func();
    queue.push(val);
  } catch (e) {
    queue.push(String(e));
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
