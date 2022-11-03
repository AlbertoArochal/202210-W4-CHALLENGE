export default function strictEquals(a, b) {
    if (isNaN(a) && isNaN(b)) {
        return false;
    }
    if (!a && !b) {
        return true;
    }
    if (Object.is(a, b)) {
        return true;
    }
    return false;
}
