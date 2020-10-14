# Challenge 2020.10.13

## Challenge_1 Requirements
Write a routine that reverses a string in place.

### Solution
```python
def reverseString(arg):
    rstr = ""
    for i in range(-1, -len(arg)-1, -1):
        rstr += (arg[i])
    return(rstr)


# ========== MAIN
if __name__ == '__main__':
    print(reverseString("Hello, World"))
```


## Challenge_2 Requirements
You are given an array of positive numbers from 1 to n, such that all numbers from 1 to n are present except one number (x). You have to find x. The input array is not sorted.

### Solution
```python
def missingNum(arg):
    for i in range(len(arg)):
        if (i + 1) not in arg:
            print("x = {}".format(i + 1))


# ========== MAIN
if __name__ == '__main__':
    missingNum([3, 7, 1, 2, 8, 4, 5])
```
