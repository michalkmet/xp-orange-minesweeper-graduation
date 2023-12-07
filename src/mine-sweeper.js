function mineSweeper(pick) {
  if (pick[4] === true) {
    return '+-+-+-+\n| | | |\n+-+-+-+\n| |X| |\n+-+-+-+\n| | | |\n+-+-+-+\n[Sandbox 3x3] BOOM! – Game Over.';
  }
  return '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n[Sandbox 3x3] Game created';
}

module.exports = mineSweeper;
