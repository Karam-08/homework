// Task 1: Find all numbers
text1 = "There are 12 eggs, 3 apples, and 100 strawberries"
let numbers = text1.match(/\d+/g)
console.log(numbers)

// Task 2: Validate a password
text2 = "password123"
let password = text2.match(/^(?=.*[a-z])(?=.*\d).{8,}$/)
// (?=.*[a-z]) ensures that at least 1 lowercase letter exists
// (?=.*\d) ensures that at least 1 digit exists
console.log(password)

// Task 3: Find specific words
text3 = "The Cat and the Dog are playing. CATS and dogs are friendly."
let words = text3.match(/cat|dog/ig)
console.log(words)

// Task 4: Remove extra spaces
text4 = "This  sentence   has  extra spaces."
let space_remover = text4.replace(/\s{2,}/g, " ")
console.log(space_remover)
