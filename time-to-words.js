// expecting numeric time to be in a format like '8:15' or '12:30'
export function convertTimeToWords(numericTime) {
  // TODO: real code goes here!
  if (numericTime === '0:00') {
    return 'midnight';
  }

  return 'half past eight';
}
