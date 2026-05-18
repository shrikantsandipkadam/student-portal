#include <iostream>
using namespace std;

int main() {
    int a = 105; // एक साधा व्हेरिएबल
    
    // १. पॉइंटर डिक्लेअर केला (* ptr चा अर्थ हा पॉइंटर आहे)
    // यात आपण 'a' चा पत्ता (&a) साठवला
    int* ptr = &a; 

    cout << "a chi value: " << a << endl;
    
    // 'a' चा मेमरी पत्ता प्रिंट होईल (हा साधारण 0x61fe14 अशा विचित्र भाषेत असतो)
    cout << "a cha memory address (&a): " << &a << endl;
    
    // पॉइंटर स्वतःमध्ये काय साठवून बसलाय? (तोच पत्ता)
    cout << "ptr madhe sahtavlela address: " << ptr << endl;
    
    // पत्त्यावरून मूळ व्हॅल्यूवर जाणे (Dereferencing)
    cout << "value at adress ptr (*ptr): " << *ptr << endl;

    return 0;
}