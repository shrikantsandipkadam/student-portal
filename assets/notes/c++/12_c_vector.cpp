#include <iostream>
#include <vector> // १. व्हेक्टरची लायब्ररी आणली
using namespace std;

int main() {
    // २. रिकाम्या व्हेक्टरची घोषणा (Declaration)
    vector<int> numbers;

    // ३. पुश-बॅक वापरून डेटा आत टाकणे
    numbers.push_back(10);
    numbers.push_back(20);
    numbers.push_back(30);

    cout << "Vector chi survatchi size: " << numbers.size() << endl;

    // ४. नेहमीच्या लूपने व्हेक्टर प्रिंट करणे
    cout << "--- Element in Vector  ---" << endl;
    for (int i = 0; i < numbers.size(); i++) {
        cout << numbers[i] << " ";
    }
    cout << endl;

    // ५. शेवटचा एलिमेंट काढून टाकणे
    numbers.pop_back();
    cout << "pop_back new size: " << numbers.size() << endl;

    return 0;
}