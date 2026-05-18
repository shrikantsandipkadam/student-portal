#m1 efficient code
n=int(input())
l=[]
for i in range(1,n+1):
    l.append(i)
print(l)
k=int(input())
for i in range(n):
    for j in range(i+1,n):
        # swap
        l[i],l[j]=l[j],l[i]
        print(l)
        x=int(input())
        if x>k:
            k=x   # keep swap
        else:
            # revert
            l[i],l[j]=l[j],l[i]
"""
#m2 brute force solution
n,l= int(input()),[]
for i range (1,n+1):
    l.append(i)
def perm(l,m):
    if len(l)==0:
        print(m)
        k=int(input())
        return k==n
    for i in range(len(l)):
        m.append(l[i])
        if perm(s[:i]+s[i+1:],seq+s[i]): return True
        m.pop()
perm(l,[])
for x in r:
    if x not in l:
        l.append(x)
l.sort()
print(l)
"""
