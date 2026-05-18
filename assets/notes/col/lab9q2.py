#m1 efficient code
s,l,w=input(),[],""
for i in s:
    if i!=" ":
        w=w+i
    else:
        l.append(int(w))
        w=""
l.append(int(w))
def dels(t):
    dels=0
    for i in str(t):
        dels=dels+int(i)
    return dels
d={}
for i in range(len(l)):
    x=dels(l[i])
    if x in d:
        d[x]=d[x]+1
    else:
        d[x]=1
count=0
for i in d:
    c=d[i]
    if c>=3:
        count=count + (c*(c-1)*(c-2))//6
print(count)
"""
#m2 brute-force solution
s,l,w=input(),[],""
for i in s:
    if i!=" ":
        w=w+i
    else:
        l.append(int(w))
        w=""
l.append(int(w))
def dels(t):
    dels=0
    for i in str(t):
        dels=dels+int(i)
    return dels
if len(l)>3:
    count=0
    for i in range (len(l)-2):
        for j in range (i+1,len(l)-1):
            for k in range (j+1,len(l)):
                if dels(l[i])==dels(l[j])==dels(l[k]):
                    count+=1
print(count)
"""
