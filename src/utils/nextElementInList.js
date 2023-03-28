const nextElementInList = (list, value) => {
  const currentValueIndex = list.indexOf(value);
  const nextValueIndex = (currentValueIndex + 1) % list.length; // Use modulo to keep looping around array
  const nextValue = list[nextValueIndex];
  return nextValue;
};

export default nextElementInList;
