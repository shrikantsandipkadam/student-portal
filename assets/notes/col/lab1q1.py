i=input("a/b/c:")
if(i=="a"):
    for i in range(0,5):
        print("*"*(5-i))
elif(i=="b"):
    for i in range(5):
        print(" "*i+"*"*(9-2*i))
    for i in range(4,-1,-1):
        print(" "*i+"*"*(9-2*i))
elif(i=="c"):
    for i in range (1,5):
        print("*"*i+" "*(8-2*i)+"*"*i)
    for i in range (4,0,-1):
        print("*"*i+" "*(8-2*i)+"*"*i)
else:
    print("invalid input")
       




