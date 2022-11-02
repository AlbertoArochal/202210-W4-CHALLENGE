import { strictEquals } from "./index.js";

const testTable = [
    { a: 1, b: 1 },
    { a: NaN, b: NaN },
    { a: 0, b: -0 },
    { a: -0, b: 0 },
    { a: 1, b: "1" },
    { a: true, b: false },
    { a: false, b: false },
    { a: "Water", b: "oil" },
];

const tester = (test, callback) => {
    for (testObject of test) {
        console.log(callback(testObject.a, testObject.b));
    }
};

tester(testTable, strictEquals);
