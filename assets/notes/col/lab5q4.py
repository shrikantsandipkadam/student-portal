def is_subsequence(A,B):
    if A[0]==B[0]:
        if len(B)==1:
            return True
        return(is_subsequence(A[1:],B[1:]))
    elif A[0]!=B[0]:
        if len(A)==1:
            return False
    return(is_subsequence(A[1:],B[0:]))
A=input()
B=input()
print(is_subsequence(A,B))
