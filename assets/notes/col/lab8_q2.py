n,k,l=int(input()),int(input()),[]
for i in range (n):
    m=int(input())
    l.append(m)
#make s[-1] is change to whole number example in 16 it outputs 6 need is 16
def last(s):
    l,w=[],""
    for i in s:
        if i!=" ":
            w=w+i
        else:
            l.append(w)
            w=""
    l.append(w)
    print(l)
    return l
for j in range (k):
    s=input()
    z=last(s)[0]
    x=last(s)[-1]
    y=last(s)[-2]
    if z=="append":
        l.append(int(x))
    elif z=="pop":
        l.pop(int(x))
    elif z=="remove":
        l.remove(int(x))
    elif z=="insert":
        l.insert(int(y),int(x))
print(l)
        
                
