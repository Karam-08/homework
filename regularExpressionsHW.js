// Task 1: Match a single digit (0-9)
str = "The code is 789"
pattern = /\d/;
console.log(str.match(pattern))

// Task 2: Match a single whitespace character
str2 = "hello world"
pattern2 = /\s/
console.log(str2.match(pattern2))

// Task 3: Match any single word character
str3 = "code"
pattern3 = /\w/
console.log(str3.match(pattern3))

// Task 4: Match the beginning of a string
str4 = "Hello, World!"
pattern4 = /^\w+/
console.log(str4.match(pattern4))

// Task 5: Match the end of a string
str5 = "This is the end"
pattern5 = /\w+$/
console.log(str5.match(pattern5))

// Task 6: Match a number that has one or more digits
str6 = "There are 123 cats."
pattern6 = /\d+/
console.log(str6.match(pattern6))

// Task 7: Match a character that appears zero or one time
str7 = "color colour"
pattern7 = /colou?r/
console.log(str7.match(pattern7))

// Task 8: Match a character that appears zero or more times
str8 = "goooal"
pattern8 = /o+/
console.log(str8.match(pattern8))

// Task 9: Match a character that appears exactly three times
str9 = "booooook"
pattern9 = /o{3}/
console.log(str9.match(pattern9))

// Task 10: Match a phone number in the format XXX-XXX-XXXX 
str10 = "123-456-7890"
pattern10 = /\d{3}-\d{3}-\d{4}/
console.log(str10.match(pattern10))
