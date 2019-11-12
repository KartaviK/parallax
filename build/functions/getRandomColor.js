export default function getRandomColor() {
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);
    let alpha = Math.random();
    return `rgb(${red}, ${green}, ${blue}, ${alpha})`;
}
//# sourceMappingURL=getRandomColor.js.map