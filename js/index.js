const strictEquals = (a, b) => {
    if (Object.is(a, b)) {
        return true;
    } else {
        return false;
    }
};

console.log(strictEquals(8, 8));
console.log(strictEquals("sobrevivir", "sobrevivir"));
console.log(strictEquals(8, "8"));
console.log(strictEquals(true, 1));
