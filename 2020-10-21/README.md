# Challenge 2020.10.21
Both challenges completed in JavaScript

## Challenge_1 Requirements
Given a string, return true if the string is a palindrome and false if it isn’t. Include spaces and punctuation in deciding if the string is a palindrome.

### Solution
```JS
function palAnswer() {
    document.getElementById("answer").innerHTML = (palCheck(document.getElementById("input").value.toLowerCase())) ? "Is Palindrome" : "NOT Palindrome";                
}

function palCheck(input) {
    if (input.length > 0) {
        for (i=0; i<(input.length / 2); i++) {
            if (input[i] != input[(input.length - 1) - i]) return false;
        } 
        return true;
    }
    return false;
}            
```

## Challenge_2 Requirements
A function that takes a string as argument and returns the number of vowels contained in that string.

### Solution
```JS
function vowelAnswer() {
    input = document.getElementById("input").value.toLowerCase();
    theAnswer = 0;
    for (var c of input) {
        if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
            theAnswer++;
        }
    }                
    document.getElementById("answer").innerHTML = theAnswer;         
}        
```
