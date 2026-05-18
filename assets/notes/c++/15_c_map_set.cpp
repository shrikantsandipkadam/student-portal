#include <iostream>
#include <set>
#include <map>
#include <string>
using namespace std;

int main() {
    // --- SET CHI KAMAL ---
    set<int> s;
    s.insert(50);
    s.insert(10);
    s.insert(50); // हा डुप्लिकेट आहे, सेट याला साठवणार नाही!
    s.insert(20);

    cout << "--- Data of Set (Sorted & Unique) ---" << endl;
    for (auto it = s.begin(); it != s.end(); it++) {
        cout << *it << " "; // फक्त 10 20 50 प्रिंट होईल
    }
    cout << "\n\n";

    // --- MAP CHI KAMAL ---
    map<int, string> m;
    m[18] = "Shrikant bhau";
    m[1] = "Samarth";
    m[45] = "Yash";

    cout << "--- Data of Map (Key-Value) ---" << endl;
    for (auto it = m.begin(); it != m.end(); it++) {
        // 'it' हा एक pair असल्यामुळे it->first आणि it->second वापरावे लागते
        cout << "Roll: " << it->first << " -> Naav: " << it->second << endl;
    }

    return 0;
}