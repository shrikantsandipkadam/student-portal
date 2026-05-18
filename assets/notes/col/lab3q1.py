x = int(input())
count = 0
while(x>0):
    rem=(x%10)
    x=x//10
    if rem%2==0:
        count = count + 1   
print(count)