const mineSweeper = require('./mine-sweeper');

describe('User Story 1: Game created', () => {
  it('UAT1.1: When game start, then I should see "+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n[Sandbox 3x3] Game created"', () => {
    expect(mineSweeper([])).toBe('+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n[Sandbox 3x3] Game created');
  });
});

describe('User Story 2: Game Over - Step on a bomb', () => {
  let pick = [false, false, false, false, true, false, false, false, false];
  it('UAT2.1: When player steps on bomb on 1;1, then I should see "+-+-+-+\n| | | |\n+-+-+-+\n| |X| |\n+-+-+-+\n| | | |\n+-+-+-+\n[Sandbox 3x3] BOOM! – Game Over."', () => {
    expect(mineSweeper(pick)).toBe('+-+-+-+\n| | | |\n+-+-+-+\n| |X| |\n+-+-+-+\n| | | |\n+-+-+-+\n[Sandbox 3x3] BOOM! – Game Over.');
  });
});
