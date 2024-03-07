export default function divideFunction(numerator, denominator) {
  try {
    if (denominator === 0) {
      throw new Error('Cannot divide by 0');
    }
    const result = numerator / denominator;
    return result;
  } catch (error) {
    throw error;
  }
}
