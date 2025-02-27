// sum of numbers in the given range

function sumInRange(start, end) {
  if (!start || !end) {
    return `Both start and end are required`;
  }

  if (
    typeof start !== 'number' ||
    typeof end !== 'number' ||
    !Number.isInteger(start) ||
    !Number.isInteger(end)
  ) {
    return 'Both start and end must be integers';
  }

  if (start > end) {
    return 'Start should be less than or equal to end';
  }

  if (start === end) {
    return start;
  }

  let sum = 0; // initially

  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumInRange(1, 10)); // 55
