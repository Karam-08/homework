import fs from 'fs'

import path from 'path'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const data = fs.readFileSync(path.join(__dirname, '3A-puzzle_input.txt'), 'utf-8')

const lines = data.split('\n')
const pattern = /mul\((\d{1,3}),(\d{1,3})\)/g;

let total = 0

for(const line of lines){ // For each line
    const matches = line.match(pattern) // Find all matches of the pattern
    if(matches){ // If it matches
        for(const match of matches){ // For each match
            const numbers = match.match(/\d{1,3}/g).map(Number) // Extract the numbers and convert them to integers
            total += numbers[0] * numbers[1] // Multiply the two numbers and add to the total
        }
    }
}

console.log(total) // Output the total