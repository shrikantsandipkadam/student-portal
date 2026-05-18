#include <iostream>
using namespace std;

int main() {
    int current_sem;
    double target_sgpa;

    // १. युझरला मेसेज दाखवणे (Output)
    cout << "Tuza chaloo semester taka: ";
    
    // २. युझरकडून नंबर घेणे (Input)
    cin >> current_sem; 

    cout << "Pudhcha sem sathi kiti SGPA target ahe?: ";
    cin >> target_sgpa;

    // ३. आलेला डेटा प्रिंट करणे
    cout << "--- Tuza Target ---" << endl;
    cout << "Semester: " << current_sem << endl;
    cout << "Target SGPA: " << target_sgpa << endl;

    return 0;
}