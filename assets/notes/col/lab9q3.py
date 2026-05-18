#m1 efficient code
n=int(input())
l=[True]*(n+1)
l[0]=False
l[1]=False
i=2
while i*i<=n:
    if l[i]==True:
        j=i*i
        while j<=n:
            l[j]=False
            j=j+i
    i=i+1
ans=[]
for i in range(2,n+1):
    if l[i]==True:
        ans.append(i)
print(ans)
"""
#m2 brute-force solution
n,l=int(input()),[]
def prime(s):
    f=True
    for i in range (2,int(s**(1/2))+1):
        if s%i==0:
            f=False
            break
    return f
for i in range (2,n+1):
    if prime(i):
        l.append(i)
print(l)
"""
"""
#m3 less lines
n = int(input())

is_prime = [True] * (n + 1)
is_prime[0] = is_prime[1] = False

for i in range(2, int(n**0.5) + 1):
    if is_prime[i]:
        for j in range(i*i, n + 1, i):
            is_prime[j] = False

primes = [i for i in range(2, n + 1) if is_prime[i]]
print(primes)
"""
