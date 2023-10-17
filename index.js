// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // TODO: real code goes here!
  if (time === '0:00') {
    return 'midnight';
  } else if (time === '12:00') {
    return 'midday';
  } else {
    const timeArray = time.split(':');
    const hours = timeArray[0];
    const minutes = timeArray[1];

    const hourMap = {
      "1": "one",
      "2": "two",
      "3": "three",
      "4": "four",
      "5": "five",
      "6": "six",
      "7": "seven",
      "8": "eight",
      "9": "nine",
      "10": "ten",
      "11": "eleven",
      "12": "twelve"
    }
    const minuteMap = {
      "1": "one",
      "2": "two",
      "3": "three",
      "4": "four",
      "5": "five",
      "6": "six",
      "7": "seven",
      "8": "eight",
      "9": "nine",
      "10": "ten",
      "11": "eleven",
      "12": "twelve",
      "13": "thirteen",
      "14": "fourteen",
      "15": "fifteen",
      "16": "sixteen",
      "17": "seventeen",
      "18": "eighteen",
      "19": "nineteen",
      "20": "twenty",
      "21": "twenty-one",
      "22": "twenty-two",
      "23": "twenty-three",
      "24": "twenty-four",
      "25": "twenty-five",
      "26": "twenty-six",
      "27": "twenty-seven",
      "28": "twenty-eight",
      "29": "twenty-nine"
    }
    if (minutes === "30") {
      return "half past " + hourMap[hours]
    } else if (minutes === "15") {
      return "quarter past " + hourMap[hours];
    } else if (minutes === "45") {
      return "quarter to " + hourMap[(parseInt(hours) + 1).toString()];
    } else {
      if (parseInt(minutes) < 30) {
        return minuteMap[minutes] + " past " + hourMap[hours];
      } else {
        return minuteMap[(60 - parseInt(minutes)).toString()] + " to " + hourMap[(parseInt(hours) + 1).toString()];
      }
    }
  }

}
module.exports = { convertTimeToWords };