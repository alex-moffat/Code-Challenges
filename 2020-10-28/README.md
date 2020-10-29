# Challenge 2020.10.21
Both challenges completed in JavaScript

## Challenge_1 Requirements
Given a string, return true if the string is a palindrome and false if it isn’t. 
- <b>Include spaces</b> and punctuation in deciding if the string is a palindrome.
- <b>Exclude spaces</b> and punctuation in deciding if the string is a palindrome.

### Output
<kbd><img src="https://github.com/alex-moffat/Code-Challenges/blob/main/2020-10-28/Screenshot_tempConverter.jpg"/></kbd>

### Solution
```JS
function palAnswer(button) {
    if (button == 1){
        document.getElementById("answer1").innerHTML = (palCheck(document.getElementById("input").value.toLowerCase(), false)) ? "Is Palindrome" : "NOT Palindrome"; 
    }
    else if (button == 2) {
        document.getElementById("answer2").innerHTML = (palCheck(document.getElementById("input").value.toLowerCase(), true)) ? "Is Palindrome" : "NOT Palindrome";
    }                               
}

function palCheck(input, exclude) {
    if (exclude) {
        input = input.replace(/[() ,'’‘"“”;:.!-?]/g, "").trim()
    }
    console.log(input);
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
    vowels = ['a', 'e', 'i', 'o', 'u']
    theAnswer = 0;
    for (var c of input) {
        if (vowels.includes(c)) {
            theAnswer++;
        }
    }                
    document.getElementById("answer").innerHTML = theAnswer;         
}                  
```
