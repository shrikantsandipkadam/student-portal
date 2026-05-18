s=int(input())
def ways(n):
    if n==2 or n==1:
        return n
    return ways(n-1)+ways(n-2)
print(ways(s))
