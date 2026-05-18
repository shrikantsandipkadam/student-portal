s = input()
n = len(s)

# n = 1
if n == 1:
    print(1)

# n = 2
elif n == 2:
    if s[0] == s[1]:
        print(2)
    else:
        print(1)

# n > 2
else:
    longest = 1

    for center in range(n):

        # odd length palindromes
        l = r = center
        while l >= 0 and r < n and s[l] == s[r]:
            if r - l + 1 > longest:
                longest = r - l + 1
            l -= 1
            r += 1

        # even length palindromes
        l = center
        r = center + 1
        while l >= 0 and r < n and s[l] == s[r]:
            if r - l + 1 > longest:
                longest = r - l + 1
            l -= 1
            r += 1

    print(longest)
