export default function randomInteger(min, max, int = true) {
    return int
        ? Math.floor(min + Math.random() * (max + 1 - min))
        : min + Math.random() * (max - min);
}
;
//# sourceMappingURL=randomInteger.js.map