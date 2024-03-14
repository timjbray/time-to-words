
const { numberToWordMap } = require('./numberToWordMap')
// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // TODO: real code goes here!
  if (time === '0:00') {
    return 'midnight';
  } else if (time == '12:00') {
    return 'midday'
  } else {
    let [hour, minute] = time.split(":");
    let _minuteWord = minuteToWord(minute);
    if (+minute > 0 && +minute <= 30) {
      return `${_minuteWord} past ${numberToWordMap[+hour]}`
    } else if (+minute == 45) {
      return `${_minuteWord} to ${numberToWordMap[+hour + 1]}`
    } else if (+minute > 30 && +minute < 60) {
      return `${numberToWordMap[60 - +minute]} to ${numberToWordMap[+hour + 1]}`
    } else {
      return `${numberToWordMap[+hour]} o'clock`
    }
  }
}

function minuteToWord(minute) {
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

module.exports = { convertTimeToWords };