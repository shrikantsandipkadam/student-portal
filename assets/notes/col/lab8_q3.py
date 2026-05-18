def spli(s):
    li,w=[],""
    for i in s:
        if i != " ":
            w=w+i
        else:
            li.append(w)
            w=""
    li.append(w)
    return li
l=spli(input())
m,n,k,grid=int(l[0]),int(l[1]),int(l[2]),[]
for i in range (m):
    row=[]
    for j in range (n):
        row.append(0)
    grid.append(row)
for i in range (k):
    t=input()
    r,c=int(t[0]),int(t[2])
    grid[r][c]=1
def paths(i,j):
    if i>=m or j>=n or grid[i][j]==1:
        return 0
    if i==m-1 or j==n-1:
        return 1
    return paths(i+1,j) + paths(i,j+1)
print(paths(0,0))
#https://pythontutor.com/visualize.html#code=def%20spli%28s%29%3A%0A%20%20%20%20li,w%3D%5B%5D,%22%22%0A%20%20%20%20for%20i%20in%20s%3A%0A%20%20%20%20%20%20%20%20if%20i%20!%3D%20%22%20%22%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20w%3Dw%2Bi%0A%20%20%20%20%20%20%20%20else%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20li.append%28w%29%0A%20%20%20%20%20%20%20%20%20%20%20%20w%3D%22%22%0A%20%20%20%20li.append%28w%29%0A%20%20%20%20return%20li%0Al%3Dspli%28input%28%29%29%0Am,n,k,grid%3Dint%28l%5B0%5D%29,int%28l%5B1%5D%29,int%28l%5B2%5D%29,%5B%5D%0Afor%20i%20in%20range%20%28m%29%3A%0A%20%20%20%20row%3D%5B%5D%0A%20%20%20%20for%20j%20in%20range%20%28n%29%3A%0A%20%20%20%20%20%20%20%20row.append%280%29%0A%20%20%20%20grid.append%28row%29%0Afor%20i%20in%20range%20%28k%29%3A%0A%20%20%20%20t%3Dinput%28%29%0A%20%20%20%20r,c%3Dint%28t%5B0%5D%29,int%28t%5B2%5D%29%0A%20%20%20%20grid%5Br%5D%5Bc%5D%3D1%0Aprint%28grid%29%0Adef%20paths%28i,j%29%3A%0A%20%20%20%20if%20i%3E%3Dm%20or%20j%3E%3Dn%20or%20grid%5Bi%5D%5Bj%5D%3D%3D1%3A%0A%20%20%20%20%20%20%20%20return%200%0A%20%20%20%20if%20i%3D%3Dm-1%20or%20j%3D%3Dn-1%3A%0A%20%20%20%20%20%20%20%20return%201%0A%20%20%20%20return%20paths%28i%2B1,j%29%20%2B%20paths%28i,j%2B1%29%0Aprint%28paths%280,0%29%29%0A%0A%20%20%20%20%0A%20%20%20%20&mode=edit&origin=opt-frontend.js&py=311&rawInputLstJSON=%5B%2210%2010%202%22,%225%204%22,%224%205%22%5D
