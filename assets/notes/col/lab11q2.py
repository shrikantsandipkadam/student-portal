import sys
class Student:
    def __init__(self,entrynum,name):
        self.entrynum=entrynum
        self.name=name
        self.current_courses=[]
    def generate_transcript(self):
        fname=self.name+" "+self.entrynum+" transcript.txt"
        courses=sorted(self.current_courses,key=lambda x:x.coursecode)
        total_points=0
        total_credits=0
        with open(fname,"w") as f:
            for c in courses:
                marks=c.registered_students.get(self.entrynum,None)
                if marks is None:
                    f.write(c.coursecode+" None\n")
                else:
                    f.write(c.coursecode+" "+str(marks)+"\n")
                    if marks>=90:gp=10
                    elif marks>=80:gp=9
                    elif marks>=70:gp=8
                    elif marks>=60:gp=7
                    elif marks>=50:gp=6
                    elif marks>=40:gp=5
                    elif marks>=30:gp=4
                    else:gp=0
                    total_points+=gp*c.credits
                    total_credits+=c.credits
            if total_credits==0:
                cgpa=0
            else:
                cgpa=total_points/total_credits
            f.write("CGPA "+str(int(cgpa)))
class Course:
    def __init__(self,coursecode,credits,capacity):
        self.coursecode=coursecode
        self.credits=credits
        self.capacity=capacity
        self.registered_students={}
    def add_student(self,student_obj):
        if len(self.registered_students)>=self.capacity:
            print("Course full.",student_obj.name,"cannot enroll in",self.coursecode+".")
            return
        if student_obj.entrynum not in self.registered_students:
            self.registered_students[student_obj.entrynum]=None
            student_obj.current_courses.append(self)
    def remove_student(self,student_obj):
        if student_obj.entrynum in self.registered_students:
            del self.registered_students[student_obj.entrynum]
            student_obj.current_courses=[c for c in student_obj.current_courses if c.coursecode!=self.coursecode]
    def load_marks(self):
        fname=self.coursecode+" marks.txt"
        with open(fname) as f:
            for line in f:
                parts=line.strip().split()
                if len(parts)==2:
                    entry,marks=parts[0],int(parts[1])
                    if entry in self.registered_students:
                        self.registered_students[entry]=marks
class University:
    def __init__(self):
        self.students={}
        self.courses={}
    def process_commands(self):
        for line in sys.stdin:
            parts=line.strip().split()
            if not parts:continue
            cmd=parts[0]
            if cmd=='COURSE':
                code,creds,cap=parts[1],int(parts[2]),int(parts[3])
                self.courses[code]=Course(code,creds,cap)
            elif cmd=='ENROLL':
                entrynum,name=parts[1],parts[2]
                self.students[entrynum]=Student(entrynum,name)
            elif cmd=='REGISTER':
                entrynum,code=parts[1],parts[2]
                self.courses[code].add_student(self.students[entrynum])
            elif cmd=='DROP':
                entrynum,code=parts[1],parts[2]
                self.courses[code].remove_student(self.students[entrynum])
            elif cmd=='MARKS':
                code=parts[1]
                self.courses[code].load_marks()
            elif cmd=='TRANSCRIPT':
                entrynum=parts[1]
                self.students[entrynum].generate_transcript()
uni=University()
uni.process_commands()