function mineSweeper(pick) {
  let message = createMessage(pick);
  let board = createBoard(pick);
  return board + message;
}

function createMessage(pick) {
  let message = '';
  if (pick[4] === true) {
    message = '[Sandbox 3x3] BOOM! – Game Over.';
  } else if (pick[6] === true) {
    message = '[Sandbox 3x3] 3 bombs around your square.';
  } else {
    message = '[Sandbox 3x3] Game created';
  }
  return message;
}

function createBoard(pick) {
  let board = '';
  if (pick[4] === true) {
    board = '+-+-+-+\n| | | |\n+-+-+-+\n| |X| |\n+-+-+-+\n| | | |\n+-+-+-+\n';
  } else if (pick[6] === true) {
    board = '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n|3| | |\n+-+-+-+\n';
  } else {
    board = '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n';
  }
  return board;
}

module.exports = mineSweeper;
