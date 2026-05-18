def binomial(n,k):
    if k==0 or k==n:
        return 1
    elif 0<k and k<n:
        return (binomial(n-1,k-1)+binomial(n-1,k))
n=int(input())
k=int(input())
print(binomial(n,k))
