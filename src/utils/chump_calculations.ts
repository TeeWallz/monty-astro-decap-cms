// src/utils/calculations.ts

/**
 * Calculate the streak (difference in days) between two dates.
 * @param {string} previousDate - The previous date string in 'YYYY-MM-DD' format.
 * @param {string} currentDate - The current date string in 'YYYY-MM-DD' format.
 * @returns {number} - The streak in days.
 */
export function calculateStreak(previousDate: string, currentDate: string): number {
    const prevDate = new Date(previousDate);
    const currDate = new Date(currentDate);
    const timeDiff = Math.abs(currDate.getTime() - prevDate.getTime());
    return Math.floor(timeDiff / (1000 * 3600 * 24)); // Difference in days
  }
  
  /**
   * Calculate the average of an array of numbers.
   * @param {number[]} numbers - An array of numbers.
   * @returns {number} - The average value.
   */
  export function calculateAverage(numbers: number[]): number {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
  }
  
  /**
   * Calculate the median of an array of numbers.
   * @param {number[]} numbers - An array of numbers.
   * @returns {number} - The median value.
   */
  export function calculateMedian(numbers: number[]): number {
    if (numbers.length === 0) return 0;
  
    // Sort the numbers in ascending order
    numbers.sort((a, b) => a - b);
  
    const middle = Math.floor(numbers.length / 2);
    // If odd length, return the middle value
    if (numbers.length % 2 !== 0) {
      return numbers[middle];
    }
    // If even length, return the average of the two middle values
    return (numbers[middle - 1] + numbers[middle]) / 2;
  }
  
  /**
   * Get the max value from an array of numbers.
   * @param {number[]} numbers - An array of numbers.
   * @returns {number} - The maximum value.
   */
  export function getMaxValue(numbers: number[]): number {
    if (numbers.length === 0) return 0;
    return Math.max(...numbers);
  }
  
  /**
   * Get the min value from an array of numbers.
   * @param {number[]} numbers - An array of numbers.
   * @returns {number} - The minimum value.
   */
  export function getMinValue(numbers: number[]): number {
    if (numbers.length === 0) return 0;
    return Math.min(...numbers);
  }
  