/**
 * Get a staggered delay value from an array of delay values.
 * Example: Given 8 cards and stagger timing (8n + 1) - 1,9,17,25 series,
 * this function will return the appropriate delay value.
 *
 * @param {delayValues} number[] - An array of delay values.
 * @param {index} number - The index to determine the delay value.
 * @returns {number} - The calculated delay value.
 */
export const getStaggeredDelay = (
  delayValues: (number | string)[],
  index: number
) => {
  const selectedDelayValue = delayValues[index % delayValues.length];
  return selectedDelayValue;
};
