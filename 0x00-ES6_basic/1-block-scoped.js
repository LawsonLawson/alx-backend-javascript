export default function taskBlock (trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true; // eslint-disable this line
    const task2 = false; // eslint-disable this line as well
  }

  return [task, task2];
}
