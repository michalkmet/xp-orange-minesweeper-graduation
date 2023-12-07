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
