# PYTHON: 3.8.2
# AUTHOR: Alex Moffat
# PURPOSE: Code Challenge
# Requirement: You are given an array of positive numbers from 1 to n, such that all numbers from 1 to n are present except one number (x). You have to find x. The input array is not sorted.
# =============================================================================


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
