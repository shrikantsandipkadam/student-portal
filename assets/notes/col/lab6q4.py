t=input()
p=input()
def wm(t,p):
    if t=="":
        if p=="*"*(len(p)):
            return True
        return False
    if p=="":
        return False
    if p[0]!="?" and p[0]!="*":
        if p[0]==t[0]:
            return wm(t[1:],p[1:])
        return False
    elif p[0]=="?":
        return wm(t[1:],p[1:])
    elif p[1:2]=="*":
        return wm(t[0:],p[1:])
    elif p[1:2]==t[1:2]:
        return wm(t[1:],p[1:])
    elif p[1:2]==t[0:1] or p[1:2]=="?":
        return wm(t[1:],p[2:])
    return wm(t[1:],p[0:])
print(wm(t,p))
