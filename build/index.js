import Point from './components/Point.js';
import Space from './components/Space.js';
import Visualizer from "./components/Visualizer.js";
import Slider from "./components/Slider.js";
import Circle from "./components/Circle.js";
import getRandomColor from "./functions/getRandomColor.js";
import chaos from "./functions/chaos.js";
import restrain from "./functions/restrain.js";
import spin from "./functions/spin.js";
let randomPointsCount = Math.round(Math.random() * 50);
let space = new Space();
let slider = new Slider('radius');
let circle = new Circle(100, Math.round(window.innerWidth / 2), Math.round(window.innerHeight / 2));
let spinParam = { enable: false, clockwise: true };
slider.target.oninput = (() => {
    circle.radius = parseInt(slider.value);
});
document.getElementById('spin').onclick = (e) => {
    spinParam.enable = !spinParam.enable;
};
document.getElementById('reverse').onclick = (e) => {
    spinParam.clockwise = !spinParam.clockwise;
};
for (let i = 0; i < randomPointsCount; i++) {
    let xAxisRandom = (Math.random() * (window.innerWidth - 20)) + 10;
    let yAxisRandom = (Math.random() * (window.innerHeight - 20)) + 10;
    space.append(new Point(xAxisRandom, yAxisRandom, getRandomColor(), (Math.random() * 15) + 1));
}
let visualizer = new Visualizer(document);
visualizer.render(space);
let chaosHandler = () => {
    space.points.forEach(point => {
        chaos(Math.random() * 75, Math.random() * 75, point, circle);
        spinParam.enable && spin(Math.random() * 75, Math.random() * 75, point, circle, spinParam.clockwise);
        restrain(point, window);
        point.update();
    });
};
let interval = setInterval(chaosHandler, 100);
visualizer.root.onwheel = (e) => {
    let value = Math.ceil(parseInt(slider.target.value) + e.deltaY);
    if (parseInt(slider.target.max) > value && parseInt(slider.target.min) < value) {
        slider.target.value = `${value}`;
        circle.radius = value;
    }
};
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