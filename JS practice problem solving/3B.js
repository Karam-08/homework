import fs from 'fs'

import path from 'path'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const data = fs.readFileSync(path.join(__dirname, '3A-puzzle_input.txt'), 'utf-8')

const lines = data.split('\n')
const pattern = /mul\((\d{1,3}),(\d{1,3})\)|do\(\)|don't\(\)/g;

let total = 0

let isEnabled = true // Enables multiplication by default

for(const line of lines){ // For each line
    const matches = line.match(pattern) // Find all matches of the pattern (including do() and don't())
    if(matches){ // If it matches
        for(const match of matches){ // For each match
            if(match === 'do()'){ // If it's do()
                isEnabled = true // Enable multiplication
            }else if(match === "don't()"){ // If it's don't()
                isEnabled = false // Disable multiplication
            }else if(match.startsWith('mul') && isEnabled){ // If it's mul() and multiplication is enabled
                const numbers = match.match(/\d{1,3}/g).map(Number) // Extract the numbers and convert them to integers
                total += numbers[0] * numbers[1] // Multiply the two numbers and add to the total
            }
        }
    }
}

console.log(total) // Output the total