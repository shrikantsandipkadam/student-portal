k = int(input())
n = int(input())
Answer = 0
i=k
while i<=n and i>=k:
    Answer +=(i)**3
    i += 1
print(Answer)