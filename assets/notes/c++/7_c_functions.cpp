#include <iostream>
using namespace std;

// १. फंक्शनची व्याख्या (Definition)
// 'int' चा अर्थ हा फंक्शन शेवटी एक पूर्ण संख्या रिटर्न करेल
int multiply(int a, int b) {
    int uttar = a * b;
    return uttar; // उत्तर परत पाठवले
}

int main() {
    int x = 10;
    int y = 20;

    // २. फंक्शनला कॉल करणे (Function Call)
    int final_result = multiply(x, y);

    cout << "multiply " << final_result << endl;

    return 0;
}