s=input()
l=[]
w=""
for i in s:
    if i!=" ":
        w=w+i
    else:
        l.append(w)
        w=""
l.append(w)
print(l)
