function mineSweeper(pick, operation = null) {
  console.log('pick: ', pick);
  console.log('operation: ', operation);
  let message = createMessage(pick, operation);
  let board = createBoard(pick, operation);
  return board + message;
}

function createMessage(pick, operation = null) {
  let message = '[Sandbox 3x3] ';
  if (pick[4] === true && operation === 'pick') {
    message += 'BOOM! – Game Over.';
  } else if (pick[6] === true && operation === 'pick') {
    message += '3 bombs around your square.';
  } else if (operation === 'flag') {
    message += 'Square flagged as bomb.';
  } else {
    message += 'Game created';
  }
  return message;
}

function createBoard(pick, operation = null) {
  let board = '';
  if (pick[4] === true && operation === 'pick') {
    board = '+-+-+-+\n| | | |\n+-+-+-+\n| |X| |\n+-+-+-+\n| | | |\n+-+-+-+\n';
  } else if (pick[6] === true && operation === 'pick') {
    board = '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n|3| | |\n+-+-+-+\n';
  } else if (operation === 'flag') {
    board = '+-+-+-+\n| | | |\n+-+-+-+\n|*|*| |\n+-+-+-+\n|3|*| |\n+-+-+-+\n';
  } else {
    board = '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n';
  }
  return board;
}

module.exports = mineSweeper;
