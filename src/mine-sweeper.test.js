const mineSweeper = require('./mine-sweeper');

describe('User Story 1: Game created', () => {
  it('UAT1.1: When game start, then I should see "+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n[Sandbox 3x3] Game created"', () => {
    expect(mineSweeper([])).toBe('+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n[Sandbox 3x3] Game created');
  });
});

describe('User Story 2: Game Over - Step on a bomb', () => {
  let pick = [false, false, false, false, true, false, false, false, false];
  let operation = 'pick';
  it('UAT2.1: When player steps on bomb on 1;1, then I should see "+-+-+-+\n| | | |\n+-+-+-+\n| |X| |\n+-+-+-+\n| | | |\n+-+-+-+\n[Sandbox 3x3] BOOM! – Game Over."', () => {
    expect(mineSweeper(pick, operation)).toBe('+-+-+-+\n| | | |\n+-+-+-+\n| |X| |\n+-+-+-+\n| | | |\n+-+-+-+\n[Sandbox 3x3] BOOM! – Game Over.');
  });
});

describe('User story 3: Clean square', () => {
  let pick = [false, false, false, false, false, false, true, false, false];
  let operation = 'pick';
  it('UAT3.1: When player clear the square 2;0, then I should see "+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n|3| | |\n+-+-+-+\n[Sandbox 3x3] 3 bombs around your square."', () => {
    expect(mineSweeper(pick, operation)).toBe('+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n|3| | |\n+-+-+-+\n[Sandbox 3x3] 3 bombs around your square.');
  });
});

describe('User story 4: Mark the bombs around', () => {
  let pick = [false, false, false, true, true, false, false, true, false];
  let operation = 'flag';
  it('UAT4.1: When player marks the 3 squares as bombs [1;0 + 1;1 + 2;1], then I should see "+-+-+-+\n| | | |\n+-+-+-+\n|*|*| |\n+-+-+-+\n|3|*| |\n+-+-+-+\n[Sandbox 3x3] Square flagged as bomb."', () => {
    expect(mineSweeper(pick, operation)).toBe('+-+-+-+\n| | | |\n+-+-+-+\n|*|*| |\n+-+-+-+\n|3|*| |\n+-+-+-+\n[Sandbox 3x3] Square flagged as bomb.');
  });
});

describe('User story 5: Game Victory after all squares cleared', () => {
  let pick = [false, true, true, false, false, true, true, false, true];
  let operation = 'pick';
  it('UAT5.1: When player clears the all the squares [2;0 + 0;1 + 0;2 + 1;2 + 2;2], then I should see "+-+-+-+\n|2|2|1|\n+-+-+-+\n|*|*|2|\n+-+-+-+\n|3|*|2|\n+-+-+-+\n[Sandbox 3x3] the land is cleared! GOOD JOB!"', () => {
    expect(mineSweeper(pick, operation)).toBe('+-+-+-+\n|2|2|1|\n+-+-+-+\n|*|*|2|\n+-+-+-+\n|3|*|2|\n+-+-+-+\n[Sandbox 3x3] the land is cleared! GOOD JOB!');
  });
});
