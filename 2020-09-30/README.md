# Challenge 2020.09.30

## Javascript Requirements
Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.

myFunction([30, 40, 20, 5], 12.55) ➞ true

### Solution
```HTML
<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Code Challenge 2020.09.30</title>
        <meta charset="utf-8">
        <script>
            function inlineSolution(change) {
                document.getElementById("answer").innerHTML = printAnswer((change[0] * 0.25) + (change[1] * 0.10) + (change[2] * 0.05) + (change[3] * 0.01) >= parseFloat(document.getElementById("amount").value)) 
            }
            function switchSolution(change) {
                totalChange = 0;
                for (i=0; i<change.length; i++) {
                    switch(i) {
                        case 0:
                            totalChange += change[i] * 0.25
                            break;
                        case 1:
                            totalChange += change[i] * 0.10
                            break;
                        case 2:
                            totalChange += change[i] * 0.05
                            break;
                        case 3:
                            totalChange += change[i] * 0.01
                            break;
                    }                    
                }
                document.getElementById("answer").innerHTML = printAnswer(totalChange >= parseFloat(document.getElementById("amount").value));                
            }
            function printAnswer(enough){
                return (enough) ? "You can pay the amount" : "You can NOT pay the amount";
            }
        </script>        
	</head>
	<body>
        <p>Click to find out if you have enough change in your pocket to pay $<input id="amount"></input></p>
        <button onclick="switchSolution([30, 40, 20, 5])">Using Switch</button>
        <button onclick="inlineSolution([30, 40, 20, 5])">Inline </button>
        <p id='answer'>answer</p>          
	</body>
</html>
```

## C# Requirements
ATM machines allow 4 or 6 digit PIN codes, and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits. Your task is to create a function that takes a string and returns true if the PIN is valid and false if it's not. If the PIN is an empty string, it must also return false.

myFunction("0000") ➞ true

myFunction("12345") ➞ false

myFunction("one253") ➞ false
 
myFunction("") ➞ false

### Solution
```CS
class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(myFunction("0000"));
            Console.WriteLine(myFunction("12345"));
            Console.WriteLine(myFunction("one253"));
            Console.WriteLine(myFunction(""));
            Console.ReadLine();
        }

        private static bool myFunction(String pin)
        {
            return (pin.Length == 4 || pin.Length == 6 && int.TryParse(pin, out _));                       
        }
    }
```
