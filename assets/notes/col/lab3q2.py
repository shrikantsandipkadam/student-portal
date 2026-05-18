n = int(input())

for i in range(1, n + 1):
    row = ""
    for j in range(1, n + 1):
        if  j == n:
            print(n)
            break
        if j > i and j < n:
            print(i,end=" ")
        if j <= i:
            print(j,end=" ")