import Point from './components/Point.js';
import Space from './components/Space.js';
import Visualizer from "./components/Visualizer.js";
import getRandomColor from "./functions/getRandomColor.js";
import Chaos from "./functions/Chaos.js";
import Slider from "./components/Slider.js";
import Circle from "./components/Circle.js";
let randomPointsCount = Math.round(Math.random() * 50);
let space = new Space();
let slider = new Slider('radius');
let circle = new Circle(100, Math.round(window.innerWidth / 2), Math.round(window.innerHeight / 2));
slider.target.oninput = ((e) => {
    circle.radius = parseInt(slider.value);
});
for (let i = 0; i < randomPointsCount; i++) {
    let xAxisRandom = (Math.random() * (window.innerWidth - 20)) + 10;
    let yAxisRandom = (Math.random() * (window.innerHeight - 20)) + 10;
    space.append(new Point(xAxisRandom, yAxisRandom, getRandomColor(), (Math.random() * 15) + 1));
}
let visualizer = new Visualizer(document);
visualizer.render(space);
let chaosHandler = () => {
    space.points.forEach(point => {
        Chaos(point, circle);
        point.update();
    });
};
let interval = setInterval(chaosHandler, 100);
visualizer.root.onclick = (e) => {
    let point = new Point(e.clientX, e.clientY, getRandomColor(), (Math.random() * 10) + 5);
    space.append(point);
    visualizer.render(point);
    clearInterval(interval);
    interval = setInterval(chaosHandler, 100);
};
window.onmousemove = (e) => {
    circle.xAxis = e.clientX;
    circle.yAxis = e.clientY;
};
//# sourceMappingURL=index.js.map