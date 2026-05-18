n1 = int(input())
n=n1
answer = 0
while(n>0):
    rem=(n%10)
    n=n//10
    answer=10*answer+ rem
print(answer == n1)

