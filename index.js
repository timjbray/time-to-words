// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // TODO: real code goes here!
  if (time === '0:00') {
    return 'midnight';
  } else if (time == '12:00') {
    return 'midday'
  } else {
    return parseTime(time)
  }

  return 'half past eight';
}

const hourMap = {
  1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five',
  6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten',
  11: 'eleven'
}

function parseTime(time) {
  let [hour, minute] = time.split(":");
  let minuteNumber = +minute;
  let timeInterval = timeIntervals(minute);
  let conjunction = ''
  let newHour = +hour;
  if (minuteNumber > 0 && minuteNumber <= 30) {
    conjunction = 'past'
  } else {
    conjunction = 'to'
    newHour = newHour + 1;
  }

  if (timeInterval) {

  }

  return `${timeInterval} ${conjunction} ${newHour}`
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
      return ''
    }
  }
}

console.log(convertTimeToWords('2:45'));

module.exports = { convertTimeToWords };