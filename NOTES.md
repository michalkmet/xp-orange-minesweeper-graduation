# Notes

## Legend

- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Plans

Pomodoro 1:

- ✅ DONE Initial project refactor
- ✅ DONE examples
- ✅ DONE User stories, UATs

Pomodoro 2:

- ✅ DONE Refactor backlog

User Story 1: Game created
As a user, I want to see empty board and game created message

- ✅ DONE UAT1.1: When game start, then I should see '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n[Sandbox 3x3] Game created'

User Story 2: Game Over - Step on a bomb
As a user, I want to see when player steps on bomb - game over

- ✅ DONE UAT2.1: When player steps on bomb on 1;1, then I should see '+-+-+-+\n| | | |\n+-+-+-+\n| |X| |\n+-+-+-+\n| | | |\n+-+-+-+\n[Sandbox 3x3] BOOM! – Game Over.'

User story 3: Clean square
As a user, I want to see when player clear the square and number of bombs around appear

- ✅ DONE UAT3.1: When player clear the square 2;0, then I should see '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n|3| | |\n+-+-+-+\n[Sandbox 3x3] 3 bombs around your square.'

Pomodoro 3:

User story 4: Mark the bombs around
As a user, I want to see when player marks the squares as a bombs

- ✅ DONE UAT4.1: When player marks the 3 squares as bombs [1;0 + 1;1 + 2;1]:, then I should see '+-+-+-+\n| | | |\n+-+-+-+\n|_|_| |\n+-+-+-+\n|3|\*| |\n+-+-+-+\n[Sandbox 3x3] Square flagged as bomb.'

- ✅ DONE Refactor production code

Pomodoro 4:

User story 5: Game Victory after all squares cleared
As a user, I want to see when game ends with a victory (all squares cleared)

- ✅ DONE UAT5.1: When player clears the all the squares [2;0 + 0;1 + 0;2 + 1;2 + 2;2], then I should see '+-+-+-+\n|2|2|1|\n+-+-+-+\n|_|_|2|\n+-+-+-+\n|3|\*|2|\n+-+-+-+\n[Sandbox 3x3] the land is cleared! GOOD JOB!'

- 🚧 IN PROGRESS Refactor creation of messages
- ⚠ TODO Refactor creation of board
- ⚠ TODO Add more user stories
- ⚠ TODO Reduce complexity of all functions
