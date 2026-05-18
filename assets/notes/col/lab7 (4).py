n=int(input())+1
s="1"
for i in range (2,n+1):
    j=1
    while j<(i-1):
        s=s[0:j]+str(int(k[j])+int(k[j-1]))
        j=j+1
    s=s+"1"
    k=s
l=[]
for i in s:
    l.append(i)
print(l)
"""
n=int(input())+1
s=["1"]
for i in range (2,n+1):
    j=1
    while j<(i-1):
        s=s[0:j]+[str(int(k[j])+int(k[j-1]))]
        j=j+1
    s=s+["1"]
    k=s
k=s
print(k)
"""
