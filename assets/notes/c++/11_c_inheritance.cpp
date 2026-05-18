#include <iostream>
#include <string>
using namespace std;
class Vehicle {
public:
    string brand = "Toyota";
    void honk() {
        cout<<"tuut, tuut! rasta soda bhau!"<<endl;
    }
};
class Car : public Vehicle {
public:
    string model = "Innova";
};
int main() {
    Car myCar;
    myCar.honk();
    cout<<myCar.brand<<" "<<myCar.model<< " aali aahe"<< endl;
    return 0;
}
// #include <iostream>
// #include <string>
// using namespace std;

// // जुना क्लास (Parent Class)
// class Vehicle {
// public:
//     string brand = "Toyota";
//     void honk() {
//         cout << "Tuut, tuut! rasta sodaa bhau!" << endl;
//     }
// };

// // नवीन क्लास (Child Class) - जो Vehicle कडून वारसा घेतोय (उभी रेघ ':' वापरून)
// class Car : public Vehicle {
// public:
//     string model = "Innova";
// };

// int main() {
//     Car myCar; // आपण ऑब्जेक्ट फक्त 'Car' चा बनवलाय
    
//     // पण आपण Vehicle चे गुणधर्म (honk आणि brand) वापरू शकतो!
//     myCar.honk(); 
//     cout << myCar.brand << " " << myCar.model << endl;
    
//     return 0;
// }