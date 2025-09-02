// Task 1: Phone number validator
function isValidPhoneNumber(phoneNumber){
    onlyDigits = /\d\d\d\d\d\d\d\d\d\d/;
    
    if(onlyDigits.test(phoneNumber)){
        return true
    }else{
        return false
    }
}
console.log(isValidPhoneNumber("1234567890"))

// Task 2: Basic password validator
function isValidPassword(password){
    if(password.length < 8){
        return false;
    }

    if(!/[A-Z]/.test(password)){
        return false;
    }

    if(!/[a-z]/.test(password)){
        return false;
    }
    
    if(!/[0-9]/.test(password)){
        return false;
    }else{
        return true;
    }
}
console.log(isValidPassword("Password123"))

function isValidHexColor(hexCode){
    if(hexCode.length !== 7 || hexCode[0] !== '#'){
        return false;
    }

    const hexDigits = /[0-9a-fA-F]/;
    for(let i = 1; i < 7; i++){
        if(!hexDigits.test(hexCode[i])){
            return false;
        }
    }
    return true;
}
console.log(isValidHexColor('#A3B4C5'))

// Task 4: Simple username validator
function isValidUsername(username){
    if(username.length < 3 || username.length > 16){
        return false;
    }
    pattern = /[a-z0-9_-]/;

    for(var i = 0; i < username.length; i++){
        if(!pattern.test(username[i])){
            return false;
        }
    }
    return true;
}
console.log(isValidUsername("user_123"));

// Task 5: Vowel/Consonant checker
function startsWithVowel(word){
    return /^[aeiouAEIOU]/.test(word);
    // the "^" makes it check the first letter only
}
console.log(startsWithVowel("Apple"))

// Task 6: Alphabetic string checker
function isAlphabetic(text){
    allowedChars = /[a-zA-Z]/

    for(var i = 0; i < text.length; i++){
        if(!allowedChars.test(text[i])){
            return false;
        }
    }
    return true;
}
console.log(isAlphabetic("HelloWorld"))

// Task 7: Numeric string checker
function isNumeric(text){
    digitPattern = /\d/

    if(text.length === 0){return false;}

    for(var i = 0; i < text.length; i++){
        if(!digitPattern.test(text[i])){
            return false;
        }
    }
    return true;
}
console.log(isNumeric("12345"))

// Task 8: Word character string checker
function isWordCharacterString(text){
    wordPattern = /\w/

    if(text.length === 0){return false;}

    for(var i = 0; i < text.length; i++){
        if(!wordPattern.test(text[i])){
            return false;
        }
    }
    return true;
}
console.log(isWordCharacterString("hello_world123"))

// Task 9: Contains whitespace detector
function containsWhitespace(text){
    return /\s/.test(text)
}
console.log(containsWhitespace("Hello World"));

// Task 10: Special character detector
function containsSpecialCharacter(text){
    for(var i = 0; i < text.length; i++){
        if(!/\w/.test(text[i]) && !/\s/.test(text[i])){
            return true;
        }
    }
    return false;
}
console.log(containsSpecialCharacter("Hello World!"));