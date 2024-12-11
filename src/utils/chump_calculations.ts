
export function calculateStreakFromStrings(chumpAfter: string, currentDate: string): number {
  const prevDate = new Date(previousDate);
  const currDate = new Date(currentDate);
  const timeDiff = Math.abs(currDate.getTime() - prevDate.getTime());
  return Math.floor(timeDiff / (1000 * 3600 * 24)); // Difference in days
}

// above, but accepting Date objects
export function calculateStreak(chump: Date, chumpAfter: Date): number {
  const timeDiff = Math.abs(chumpAfter.getTime() - chump.getTime());
  return Math.floor(timeDiff / (1000 * 3600 * 24)); // Difference in days
}


export function calculateAverage(numbers: number[]): number {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

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

export function getMaxValue(numbers: number[]): number {
  if (numbers.length === 0) return 0;
  return Math.max(...numbers);
}

export function getMinValue(numbers: number[]): number {
  if (numbers.length === 0) return 0;
  return Math.min(...numbers);
}

export function enrichChumpData(chumpData: any[]): any[] {
  chumpData = chumpData.sort((a, b) => {
    return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
  });
  // perform a lag and lead difference the ccurrent chump date and the previous chump date
  for (let i = 0; i < chumpData.length; i++) {
    let today = new Date();
    today = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const chump = chumpData[i].data.date;
    const chumpAfter = i === 0 ? today : chumpData[i - 1].data.date;
    chumpData[i].data.streak = calculateStreak(chump, chumpAfter);
    let kk = 0;
  }



  return chumpData;
}