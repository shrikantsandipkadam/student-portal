#include <iostream>
#include <string>
#include <utility> // pair वापरण्यासाठी ही लायब्ररी लागते (काहीवेळा iostream मध्येच असते)
using namespace std;

int main() {
    // १. pair तयार केला: पहिला डेटा int असेल, दुसरा string
    pair<int, string> student;

    // २. make_pair वापरून जोडी बनवली
    student = make_pair(18, "Shrikant bhau");

    // ३. डेटा प्रिंट करणे (.first आणि .second चा वापर करून)
    cout << "Roll No: " << student.first << endl;
    cout << "Naav: " << student.second << endl;

    return 0;
}