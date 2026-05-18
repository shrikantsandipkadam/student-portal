def sum_factors(n):
    k=0
    for i in range (1, n//2 +1):
        if n%i==0:
            k=k+i
    return k
n = int(input())
print(sum_factors(n))
