a = int(input("side a: "))
b = int(input("side b: "))
c = int(input("side c: "))
if a+b>c and a+c>b and b+c>a:
    print("valid triangle: ")
else:
    print("invalid triangle: ")
