// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // TODO: real code goes here!
  if (time === '0:00') {
    return 'midnight';
  } else if (time == '12:00') {
    return 'midday'
  } else {
    return convert(time)
  }
}

const numberToWordMap = {
  1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five',
  6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten',
  11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen'
  , 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen', 20: 'twenty', 21: 'twenty one',
  22: 'twenty two', 23: 'twenty three', 24: 'twenty four', 25: 'twenty five', 26: 'twenty six'
  , 27: 'twenty seven', 28: 'twenty eight', 29: 'twenty nine'
}

function convert(time) {
  let [hour, minute] = time.split(":");
  let minuteNumber = +minute;
  let timeInterval = timeIntervals(minute);
  let newHour = +hour;
  if (minuteNumber > 0 && minuteNumber <= 30) {
    newHour = numberToWordMap[newHour];
    return `${timeInterval} past ${newHour}`
  } else if (minuteNumber == 45) {
    newHour = numberToWordMap[newHour + 1];
    return `${timeInterval} to ${newHour}`
  } else if (minuteNumber > 30 && minuteNumber <= 60) {
    newHour = numberToWordMap[newHour + 1];
    return `${numberToWordMap[60 - minuteNumber]} to ${newHour}`
  } else {
    return `${numberToWordMap[newHour]} o'clock`
  }
}

function timeIntervals(minute) {
  switch (minute) {
    case '15': {
      return 'quarter'
    }
    case '45': {
      return 'quarter'
    }
    case '30': {
      return 'half'
    }
    case '55': {
      return 'five'
    }
    default: {
      return numberToWordMap[+minute]
    }
  }
}

console.log(convertTimeToWords('0:00'));
console.log(convertTimeToWords('12:00'));
console.log(convertTimeToWords('2:00'));
console.log(convertTimeToWords('2:03'));
console.log(convertTimeToWords('2:11'));
console.log(convertTimeToWords('2:15'));
console.log(convertTimeToWords('2:30'));
console.log(convertTimeToWords('2:33'));
console.log(convertTimeToWords('2:40'));
console.log(convertTimeToWords('2:45'));
console.log(convertTimeToWords('2:55'));

module.exports = { convertTimeToWords };