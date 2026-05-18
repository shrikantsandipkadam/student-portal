n=int(input())
def primei(t):
    flag=True
    if t==2:
        return True
    elif t%2==0:
        return False
    else:
        for k in range (3,int(t**(1/2))+1,2):
            if t%k==0:
                flag = False
                break
    return flag
def gcdi(s):
    c=0
    for i in range (2,s):
        for j in range (i+1,s+1):
            a,b=j,i
            while b>0:
                a,b=b,a%b
            if a!=1 and primei(a):
                c=c+1
    return c
print(gcdi(n))
