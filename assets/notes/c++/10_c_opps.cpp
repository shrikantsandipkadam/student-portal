#include <iostream>
#include <string>
using namespace std;
class Car {
public:
    string brand;
    int speed;
    void display() {
        cout << "Brand: " << brand << ", Speed: " << speed << " km/h" << endl;
    }
};
int main() {
    Car c1;
    c1.brand = "Toyota";
    c1.speed = 120;

    cout << "--- Car Details ---" << endl;
    c1.display();

    return 0;
}

// #include <iostream>
// #include <string>
// using namespace std;

// // १. क्लास तयार केला (नकाशा)
// class Student {
// public: // 'public' लिहिलं तरच हा डेटा main() मध्ये वापरता येतो
//     string name;
//     int rollNo;
//     double cgpa;

//     // क्लासच्या आत लिहिलेल्या फंक्शनला 'Method' म्हणतात
//     void dakhva_data() {
//         cout << "Naav: " << name << ", Roll No: " << rollNo << ", CGPA: " << cgpa << endl;
//     }
// };

// int main() {
//     // २. ऑब्जेक्ट तयार केला (प्रत्यक्ष मेमरी तयार झाली)
//     Student s1;
    
//     // डॅाट (.) वापरून ऑब्जेक्टच्या आत डेटा भरणे
//     s1.name = "Shrikant";
//     s1.rollNo = 18;
//     s1.cgpa = 8.3;

//     // ऑब्जेक्टचा फंक्शन कॉल करणे
//     cout << "--- Student Details ---" << endl;
//     s1.dakhva_data();

//     return 0;
// }