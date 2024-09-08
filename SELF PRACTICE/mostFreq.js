function mostFrequent(arr) {
    let freqMap = {};
    let maxFreq = 0;
    let mostFreqElement;

    for (let elem of arr) {
        freqMap[elem] = (freqMap[elem] || 0) + 1;
        if (freqMap[elem] > maxFreq) {
            maxFreq = freqMap[elem];
            mostFreqElement = elem;
        }
    }

    return mostFreqElement;
}

console.log(mostFrequent([1, 2, 3, 2, 3, 3, 4])); // Output: 3
