## Backlog

## Legend

- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Backlog

User Story 1: Game created
As a user, I want to see empty board and game created message

```
- ⚠ TODO UAT1.1: When game start, then I should see '+-+-+-+
  | | | |
  +-+-+-+
  | | | |
  +-+-+-+
  | | | |
  +-+-+-+
  [Sandbox 3x3] Game created'
```

User Story 2: Game Over - Step on a bomb
As a user, I want to see when player steps on bomb - game over

```
- ⚠ TODO UAT2.1: When player steps on bomb on 1;1, then I should see '+-+-+-+
  | | | |
  +-+-+-+
  | |X| |
  +-+-+-+
  | | | |
  +-+-+-+
  [Sandbox 3x3] BOOM! – Game Over.'
```

User story 3: Clean square
As a user, I want to see when player clear the square and number of bombs around appear

```
- ⚠ TODO UAT3.1: When player clear the square 2;0, then I should see '+-+-+-+
  | | | |
  +-+-+-+
  | | | |
  +-+-+-+
  |3| | |
  +-+-+-+
  [Sandbox 3x3] 3 bombs around your square.
```

User story 4: Mark the bombs around
As a user, I want to see when player marks the squares as a bombs

```
- ⚠ TODO UAT4.1: When player marks the 3 squares as bombs [1;0 + 1;1 + 2;1]:, then I should see

+-+-+-+
| | | |
+-+-+-+
|*|*| |
+-+-+-+
|3|*| |
+-+-+-+
[Sandbox 3x3] Square flagged as bomb.
```

User story 5: Game Victory after all squares cleared
As a user, I want to see when game ends with a victory (all squares cleared)

```
- ⚠ TODO UAT5.1: When player clears the all the squares [2;0 + 0;1 + 0;2 + 1;2 + 2;2], then I should see '+-+-+-+
  |2|2|1|
  +-+-+-+
  |_|_|2|
  +-+-+-+
  |3|*|2|
  +-+-+-+
  [Sandbox 3x3] the land is cleared! GOOD JOB!
```

User story 6: Game Victory after massive cleaning
As a user, I want to see when game ends with a victory

```
- ⚠ TODO UAT6.1: When player clears the square on 0;0 and only bomb is at 0;2, then I should see '+-+-+-+
  |_|1| |
  +-+-+-+
  |_|1|1|
  +-+-+-+
  |_|_|_|
  +-+-+-+
  [Sandbox 3x3] the land is cleared! GOOD JOB!
```
