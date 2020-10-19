# Challenge 2020.10.13
Both challenges completed in Python

## Challenge_1 Requirements
Write a routine that reverses a string in place.

### Solution
```python
def reverseString(arg):
    rstr = ""
    for i in range(-1, -len(arg) - 1, -1):
        rstr += (arg[i])
    return (rstr)


def reverseShort(arg):
    return arg[::-1]


def reverseSlice(arg):
    return arg[slice(-1, -len(arg) - 1, -1)]


# ========== MAIN
if __name__ == '__main__':
    print(reverseString("Hello, World"))
    print(reverseShort("Hello, World"))
    print(reverseSlice("Hello, World"))
```

## Challenge_2 Requirements
You are given an array of positive numbers from 1 to n, such that all numbers from 1 to n are present except one number (x). You have to find x. The input array is not sorted.

### Solution
```python
def missingNums(arg):
    for i in range(len(arg)):
        if (i + 1) not in arg:
            print("x = {}".format(i + 1))


def missingNum(arg):
    direct = (((len(arg)+1) * (len(arg)+2)) / 2) - sum(arg)
    print("x = {:n}".format(direct))


# ========== MAIN
if __name__ == '__main__':
    missingNums([3, 7, 1, 2, 8, 4, 5])
    missingNum([3, 7, 1, 2, 8, 4, 5])
```
