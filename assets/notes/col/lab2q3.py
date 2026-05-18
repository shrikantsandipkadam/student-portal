d = int(input())
n = int(input())
i = 1
while i<=n and n>2*d:
    if i<=d or i>(n-d):
        print("*"*n)
    if  i>d and i <= (n-d):
        print("*"*d + " "*(n-2*d) + "*"*d )
    i+=1

