// #include <iostream>
// using namespace std;

// int main() {
//     // १ ते ५ पर्यंत आकडे प्रिंट करणे
//     int number;
//     cin>> number;
//     cout << "--- For Loop Chi Kamal ---" << endl;
    
//     for (int i = 1; i <= number; i++) {
//         cout << number << " x " << i << " = " << number * i << endl;
//     }

//     return 0;
// }
#include <iostream>
using namespace std;

int main() {
    int number;
    cout << "type number: ";
    cin >> number;

    int i = 1; // १. सुरुवात (Initialization)

    cout << "--- While Loop cha table ---" << endl;
    
    while (i <= 10) { // २. कंडिशन (Condition)
        cout << number << " x " << i << " = " << number * i << endl;
        i++; // ३. वाढवणे (Increment) - हे विसरला तर लूप अनंत काळ चालत राहील!
    }

    return 0;
}