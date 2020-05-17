function checkString(str1, str2) {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}
console.log(checkString('etat', 'tea'));

let a, b, c;

function gennarate(arrays) {
    c = Math.random() * 0.25 + 0.05;
    b = Math.random() * ((1 - c) / 2 - c) + c;
    a = 1 - b - c;
    arrays[0].push(a);
    arrays[1].push(b);
    arrays[2].push(c);
}
let counter = 0,
    arr = [1, 2, 3];
arr.shift();
arr.push(4);
console.log(arr);