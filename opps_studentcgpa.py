class Student:
    def __init__(self, name, cgpa):
        self.name = name
        self.cgpa = cgpa
    def pass_fail(self):
        if self.cgpa >=3:
            print(self.name, "you are Pass")
        else:
            print(self.name, "you are Fail")
    def set_cgpa(self, cgpa):
        if 0 <= self.cgpa <= 10:
            self.cgpa = cgpa
            print("CGPA updated successfully", self.cgpa)
        else:
            print("Invalid CGPA")
n=int(input())
d={}
for i in range (n):
    print("Name:",end=" ")
    a=input()
    print("CGPA:",end=" ")
    b=float(input())
    d[a]=b
for i in d:
    student=Student(i,d[i])
    student.pass_fail()
    student.set_cgpa(2)
    print(d)