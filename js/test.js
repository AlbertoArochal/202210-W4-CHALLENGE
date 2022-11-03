import strictEquals from './index.js';

const testTable = [
    { a: 1, b: 1 },
    { a: NaN, b: NaN },
    { a: 0, b: -0 },
    { a: -0, b: 0 },
    { a: 1, b: '1' },
    { a: true, b: false },
    { a: false, b: false },
    { a: 'Water', b: 'oil' },
];

function tester(table, callback) {
    table = testTable;
    callback = strictEquals;
    table.map((result) => console.log(callback(result.a, result.b)));
}

tester();

const elements = document.querySelectorAll('div.test');
let i = 0;

for (const element of elements) {
    element.innerHTML = `The result of the test ${i + 1}, ${[
        testTable[i].a,
    ]} === ${testTable[i].b} is ${strictEquals(
        testTable[i].a,
        testTable[i].b
    )}`;
    i++;
}
