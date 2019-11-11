export default function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let hashTag = '#';
    for (let i = 0; i < 6; i++) {
        hashTag += letters[Math.floor(Math.random() * 16)];
    }
    return hashTag;
}
//# sourceMappingURL=getRandomColor.js.map