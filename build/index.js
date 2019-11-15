import Point from './components/Point.js';
import Space from './components/Space.js';
import Visualizer from "./components/Visualizer.js";
import Slider from "./components/Slider.js";
import Circle from "./components/Circle.js";
import getRandomColor from "./functions/getRandomColor.js";
import Dispatcher from "./Dispatcher.js";
import * as Listener from './components/Listener.js';
let randomPointsCount = Math.round(Math.random() * 50);
let space = new Space();
let slider = new Slider('radius');
let circle = new Circle(100, Math.round(window.innerWidth / 2), Math.round(window.innerHeight / 2));
let spin = { enable: false, clockwise: true };
let chaosParams = {
    nextX: () => Math.random() * 75,
    nextY: () => Math.random() * 75,
    figure: () => circle
};
let restrainParams = {
    window: () => window,
};
let spinParams = {
    spin: () => spin,
    nextX: () => Math.random() * 75,
    nextY: () => Math.random() * 75,
    figure: () => circle,
};
let eventParams = {
    chaos: chaosParams,
    restrain: restrainParams,
    spin: spinParams,
};
let dispatcher = new Dispatcher();
dispatcher.addListener('chaos', Listener.Chaos);
dispatcher.addListener('restrain', Listener.Restrain);
dispatcher.addListener('spin', Listener.Spin);
slider.target.oninput = (() => {
    circle.radius = parseInt(slider.value);
});
document.getElementById('spin').onclick = (e) => {
    spin.enable = !spin.enable;
};
document.getElementById('reverse').onclick = (e) => {
    spin.clockwise = !spin.clockwise;
};
for (let i = 0; i < randomPointsCount; i++) {
    let xAxisRandom = (Math.random() * (window.innerWidth - 20)) + 10;
    let yAxisRandom = (Math.random() * (window.innerHeight - 20)) + 10;
    space.append(new Point(xAxisRandom, yAxisRandom, getRandomColor(), (Math.random() * 15) + 1));
}
let visualizer = new Visualizer(document);
visualizer.render(space);
let updateHandler = () => {
    space.points.forEach(point => {
        Object.keys(eventParams).forEach(event => dispatcher.dispatch(event, point, eventParams[event]));
        point.update();
    });
};
setInterval(updateHandler, 100);
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
};
window.onmousemove = (e) => {
    circle.xAxis = e.clientX;
    circle.yAxis = e.clientY;
};
//# sourceMappingURL=index.js.map
