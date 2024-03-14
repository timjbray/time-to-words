const  { convertTimeToWords } = require('./index');


describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  it('Handles 30 - 8:30', () => {
    const timeInWords = convertTimeToWords('8:30');
    expect(timeInWords).toBe('half past eight');
  });

  it('Handles times after 30 mins - 2:45', () => {
    const timeInWords = convertTimeToWords('2:45');
    expect(timeInWords).toBe('quarter to three');
  });

  it('Handles times after 15 mins - 1:15', () => {
    const timeInWords = convertTimeToWords('1:15');
    expect(timeInWords).toBe('quarter past one');
  });

  it('Handles 9 oclock', () => {
    const timeInWords = convertTimeToWords('9:00');
    expect(timeInWords).toBe(`nine o'clock`);
  });
});
