#m1 efficient code
s,l,w=input(),[],""
for i in s:
    if i!=" ":
        w=w+i
    else:
        l.append(int(w))
        w=""
l.append(int(w))
d={}
f=0
for i in range(len(l)):
    for j in range(i+1,len(l)):
        s=l[i]+l[j]
        if s in d:
            for p in d[s]:
                if p[0]!=i and p[0]!=j and p[1]!=i and p[1]!=j:
                    print(1)
                    f=1
                    break
            if f: break
            d[s].append((i,j))
        else:
            d[s]=[(i,j)]
    if f: break
if f==0:
    print(0)
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
if len(l)<4:
    print(0)
else:
    f=False
    for i in range (len(l)-3):
        for j in range (i+1,len(l)-2):
            for k in range (j+1,len(l)-1):
                for m in range (k+1,len(l)):
                    if l[i]+l[j]==l[k]+l[m] or l[i]+l[k]==l[j]+l[m] or l[i]+l[m]==l[j]+l[k]:
                        print(1)
                        f=True
                        break
                if f: break
            if f: break
        if f: break
    else:
        print(0)
"""
