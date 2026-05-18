s1 = input()
s=s1.lower()
n = len(s)
longest = s[0]
for i in range(n):
    for j in range(i + 1, n):
        sub = s[i:j+1]
        if sub == sub[::-1]:
            if len(sub) > len(longest):
                longest = sub
print(len(longest))
