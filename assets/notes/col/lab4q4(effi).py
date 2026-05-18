s = input("write a word: ").lower()
n = len(s)

longest = ""

for center in range(n):

    # odd length palindrome (center at one character)
    left = right = center
    while left >= 0 and right < n and s[left] == s[right]:
        if right - left + 1 > len(longest):
            longest = s[left:right+1]
        # pruning condition (your idea)
        if len(longest) > n // 2:
            break
        left -= 1
        right += 1

    # even length palindrome (center between two characters)
    left = center
    right = center + 1
    while left >= 0 and right < n and s[left] == s[right]:
        if right - left + 1 > len(longest):
            longest = s[left:right+1]
        if len(longest) > n // 2:
            break
        left -= 1
        right += 1

n=len(longest)
print(n)
