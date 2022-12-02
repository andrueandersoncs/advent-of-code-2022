type OpponentChoices = 'A' | 'B' | 'C'

type PlayerChoices = 'X' | 'Y' | 'Z'

type ChoiceScores = 1 | 2 | 3

type OutcomeScores = 0 | 3 | 6

type Scores = [ChoiceScores, OutcomeScores]

type Outcomes = Record<OpponentChoices, Record<PlayerChoices, Scores>>

const outcomes: Outcomes = {
    'A': {
        'X': [1, 3],
        'Y': [2, 6],
        'Z': [3, 0]
    },
    'B': {
        'X': [1, 0],
        'Y': [2, 3],
        'Z': [3, 6]
    },
    'C': {
        'X': [1, 6],
        'Y': [2, 0],
        'Z': [3, 3]
    },
}

const input = await Deno.readTextFile('./day2/input.txt')

const sum =
    input
        .split('\n')
        .map(line => line.split(' '))
        .map(plays => outcomes[plays[0]][plays[1]])
        .map(outcome => outcome[0] + outcome[1])
        .reduce((total, current) => total + current, 0)

console.log(sum)

// the second column says how the round needs to end: X means you need to lose, Y means you need to end the round in a draw, and Z means you need to win

type Lose = 'X'
type Draw = 'Y'
type Win = 'Z'

type Instructions = Lose | Draw | Win

type Play = Record<OpponentChoices, Record<Instructions, Scores>>

const play: Play = {
    'A': {
        'X': [3, 0],
        'Y': [1, 3],
        'Z': [2, 6]
    },
    'B': {
        'X': [1, 0],
        'Y': [2, 3],
        'Z': [3, 6]
    },
    'C': {
        'X': [2, 0],
        'Y': [3, 3],
        'Z': [1, 6]
    },
}

const stepTwo =
    input
        .split('\n')
        .map(line => line.split(' '))
        .map(plays => play[plays[0]][plays[1]])
        .map(outcome => outcome[0] + outcome[1])
        .reduce((total, current) => total + current, 0)
        
console.log(stepTwo)