#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> v = {10, 20, 30};

    // Iterator डिक्लेअर करायची ही जुनी पद्धत आहे:
    // vector<int>::iterator it;
    
    // पण आपण प्रो-कोडरसारखं 'auto' वापरू, जो स्वतःहून टाईप शोधून काढतो!
    cout << "--- Printing with the help of Iterator ---" << endl;
    for (auto it = v.begin(); it != v.end(); it++) {
        cout << *it << " "; // *it लिहिल्यामुळे त्या पत्त्यावरची व्हॅल्यू प्रिंट होते
    }
    cout << endl;

    return 0;
}