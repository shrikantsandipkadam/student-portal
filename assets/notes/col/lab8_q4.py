n,r,l= input(),[],[]
def perm(s,seq):
    if len(s)==0:
        r.append(int(seq))
    for i in range(len(s)):
        perm(s[:i]+s[i+1:],seq+s[i])
perm(n,"")
for x in r:
    if x not in l:
        l.append(x)
l.sort()
print(l)

    
