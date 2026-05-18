#include <iostream>
using namespace std;

int main() {
    // ५ साईझचा integer array तयार केला
    int ranks[6]={10,20,12,13,25,27};

    // जर आपल्याला तिसऱ्या डब्यातील (इंडेक्स २) व्हॅल्यू प्रिंट करायची असेल:
    cout << "Index 2 var konti value ahe: " << ranks[2] << endl;

    // लूप वापरून अख्खा Array प्रिंट करणे:
    cout << "--- Purna Array ---" << endl;
    for (int i = 0; i < 6; i++) {
        cout << "Index " << i << " chi value: " << ranks[i] << endl;
    }
    for (int i=0;i<6;i++){
        cout << i << ": " << ranks[i] << endl;
    }
    return 0;
}