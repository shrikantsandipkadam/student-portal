#include <iostream>
using namespace std;

int main() {
    double cgpa;
    cout << "Tuza CGPA taka: ";
    cin >> cgpa;

    // १. पहिली कंडिशन
    if (cgpa >= 8.0) {
        cout << "Safe Zone! Placements sathi automatic shortlisting hoil." << endl;
    } 
    // २. दुसरी कंडिशन (Python मधील elif म्हणजेच C++ मधील else if)
    else if (cgpa >= 7.0 && cgpa < 8.0) {
        cout << "Border var ahes bhau. Mehnat vadhva lagel, target 8.5+ thev!" << endl;
    } 
    // ३. जर वरच्या दोन्ही कंडिशन्स खोट्या ठरल्या तर
    else {
        cout << "Danger zone! Core theoretical exams var jast focus kar." << endl;
    }

    return 0;
}