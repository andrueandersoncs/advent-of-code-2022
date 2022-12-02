type Rock = 'A' | 'X'
type Paper = 'B' | 'Y'
type Scissors = 'C' | 'Z'

type Choice = Rock | Paper | Scissors

type RoundOne<Opponent extends Choice, Player extends Choice> =
    Opponent extends Rock
        ? Player extends Rock
            ? 4
        : Player extends Paper
            ? 8
        : 3
    : Opponent extends Paper
        ? Player extends Rock
            ? 1
        : Player extends Paper
            ? 5
        : 9
    : Player extends Rock
        ? 7
    : Player extends Paper
        ? 2
    : 6

type Result = RoundOne<Rock, Paper>