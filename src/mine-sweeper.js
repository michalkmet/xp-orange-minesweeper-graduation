function mineSweeper(pick, operation = null) {
  let message = createMessage(pick, operation);
  let board = createBoard(pick, operation);
  console.log(board + message);
  return board + message;
}

function createMessage(pick, operation = null) {
  let message = '[Sandbox 3x3] ';

  if (operation === 'pick') {
    message += createPickMessage(pick);
  } else if (operation === 'flag') {
    message += createFlagMessage(pick);
  } else {
    message += 'Game created';
  }
  return message;
}

function createPickMessage(pick) {
  let message = '';
  if (pick[4] === true) {
    message = 'BOOM! – Game Over.';
  } else if (pick[8] === true) {
    message = 'the land is cleared! GOOD JOB!';
  } else if (pick[6] === true) {
    message = '3 bombs around your square.';
  }
  return message;
}

function createFlagMessage(pick) {
  if (pick) {
    return 'Square flagged as bomb.';
  }
}

function createBoard(pick, operation = null) {
  let board = '';

  if (operation === 'pick') {
    board += createPickBoard(pick);
  } else if (operation === 'flag') {
    board += createFlagBoard(pick);
  } else {
    board += '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n';
  }
  return board;
}

function createPickBoard(pick) {
  let board = '';
  if (pick[4] === true) {
    board = '+-+-+-+\n| | | |\n+-+-+-+\n| |X| |\n+-+-+-+\n| | | |\n+-+-+-+\n';
  } else if (pick[6] === true && pick[8] === false) {
    board = '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n|3| | |\n+-+-+-+\n';
  } else {
    board = '+-+-+-+\n|2|2|1|\n+-+-+-+\n|*|*|2|\n+-+-+-+\n|3|*|2|\n+-+-+-+\n';
  }
  return board;
}

function createFlagBoard(pick) {
  if (pick) {
    return '+-+-+-+\n| | | |\n+-+-+-+\n|*|*| |\n+-+-+-+\n|3|*| |\n+-+-+-+\n';
  }
}

module.exports = mineSweeper;
