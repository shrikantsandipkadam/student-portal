a = int(input("Enter non-zero real value of a: "))
b = int(input("Enter real value of b: "))
c = int(input("Enter real value of c: "))
if (a==0):
    print("invalid input")
elif (b**2-4*a*c<0):
    print("zero real root")
elif (b*b-4*a*c==0):
    print("one real root")
elif (b*b-4*a*c>0):
    print("two real root")
else:
    print("invalid input")
