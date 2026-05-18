n = int(input())
for i in range(1, n):
    for j in range(i + 1, n + 1):
        a,b=i,j
        while b>0:
            a,b=b,a%b
        if a==1 and b==0:
                print(i,j)