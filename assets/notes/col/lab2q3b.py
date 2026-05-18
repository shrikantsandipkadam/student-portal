d = int(input("enter d: "))
n = int(input("enter n: "))
if 2*d<n:
    i = 1
    while i<=n:
        if i<=d or i>(n-d):
            print("*"*n)
        elif  i>d and i <= (n-d):
            print("*"*d + " "*(n-2*d) + "*"*d )
        i+=1
else:
    print("invaLide input: ")