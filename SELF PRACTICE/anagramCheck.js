function isAnagram(str1, str2) {
    const normalize = str => str.split('').sort().join('');
    return normalize(str1) === normalize(str2);
}

console.log(isAnagram("listen", "silent")); // Output: true
console.log(isAnagram("hello", "world")); // Output: false
