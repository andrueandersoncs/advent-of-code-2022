// find the elf carrying the most calories, how many calories is he carrying?

type ElvesFromText = (text: string) => number[][]

const elvesFromText: ElvesFromText = text =>
    text
        .split('\n\n')
        .map(caloriesText =>
            caloriesText
                .split('\n')
                .map(Number))

type TotalCaloriesCarried = (snackList: number[]) => number

const totalCaloriesCarried: TotalCaloriesCarried = snackList =>
    snackList.reduce((sum, cal) => sum + cal, 0)
                
type ElfCarryingMostCalories = (elves: number[][]) => number;

const elfCarryingMostCalories: ElfCarryingMostCalories = (elves) =>
    elves
        .map(totalCaloriesCarried)
        .reduce((most, current) => current > most ? current : most)

const file = await Deno.readTextFile('./day1/input.txt')
const mostCalories = elfCarryingMostCalories(elvesFromText(file))

console.log(mostCalories)

type SumOfTopThree = (elves: number[][]) => number;

const sumOfTopThree: SumOfTopThree = (elves) =>
    elves
        .map(totalCaloriesCarried)
        .sort((a, b) => a - b)
        .slice(-3)
        .reduce((sum, current) => sum + current, 0)

console.log(sumOfTopThree(elvesFromText(file)))