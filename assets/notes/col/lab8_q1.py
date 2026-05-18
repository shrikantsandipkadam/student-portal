#m1
n,k=int(input()),int(input())
l,m=[],1
def prime(n):
    f=True
    if n==1:
        return False
    elif n==2:
        return True
    elif n%2 ==0:
        return False
    else:
        for i in range (2,int((n**(1/2))+1)):
            if n%i==0:
                return False
    return f
while len(l)<n:
    def primef(m):
        p=0
        for o in range (1,m+1):
            if prime(o):
                if m%o==0:
                    p=p+1
                    if p==k:
                        return True
        return False
    if primef(m)==True and prime(m)==False:
        l=l+[m]
    m=m+1
print(l)     
"""
#m2
n,k=int(input()),int(input())
def primef(x):
    count,i=0,2
    while i*i<=x:
        if x%i==0:
            count+=1
            while x%i==0:
                x=x//i
        i+=1
    if x > 1:
        count += 1
    return count
result,num=[],4
while len(result)<n:
    if primef(num)>=k:
        result.append(num)
    num+=1
print(result)
"""
