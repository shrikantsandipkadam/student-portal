n=int(input())
def cuberoot(n,l,r):
    m=(r+l)//2
    if (l+1)==r:
        return l
    if m*m*m <= n*n+10:
        return cuberoot(n,m,r)
    return cuberoot(n,l,m)
print(cuberoot(n,0,n*n+10))
