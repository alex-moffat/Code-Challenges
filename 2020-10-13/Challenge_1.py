# PYTHON: 3.8.2
# AUTHOR: Alex Moffat
# PURPOSE: Code Challenge
# Requirement: Write a routine that reverses a string in place.
# =============================================================================


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
