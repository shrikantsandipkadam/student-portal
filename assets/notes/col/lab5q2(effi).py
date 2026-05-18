def binomial(n,k):
    def factorial(n):
        if n==0:
            return 1
        elif n>0:
            return(n*factorial(n-1))
    if k==0 or k==n:
        return 1
    elif 0<k and k<n:
        return((factorial(n))/((factorial(n-k))*(factorial(k))))
n=int(input())
k=int(input())
print(int(binomial(n,k)))

