import fs from 'fs'

import path from 'path'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const data = fs.readFileSync(path.join(__dirname, '3A-puzzle_input.txt'), 'utf-8')

const lines = data.split('\n')
const goal = /mul\(\d{1,3},\d{1,3}\)/gm

