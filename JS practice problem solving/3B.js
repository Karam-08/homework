import fs from 'fs'

import path from 'path'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const data = fs.readFileSync(path.join(__dirname, '3A-puzzle_input.txt'), 'utf-8')

const lines = data.split('\n')
const pattern = /mul\((\d{1,3}),(\d{1,3})\)|do\(\)|don't\(\)/g;

let total = 0

let isEnabled = true

for(const line of lines){
    const matches = line.match(pattern)
    if(matches){
        for(const match of matches){
            if(match === 'do()'){
                isEnabled = true
            }else if(match === "don't()"){
                isEnabled = false
            }else if(match.startsWith('mul') && isEnabled){
                const numbers = match.match(/\d{1,3}/g).map(Number)
                total += numbers[0] * numbers[1]
            }
        }
    }
}

console.log(total)