import Dispatcher from "./Dispatcher.js";
import randomInteger from './functions/randomInteger.js';
import * as Component from './components/index.js';
import * as Listener from './components/Listener/index.js';
let randomPointsCount = Math.round(Math.random() * 50);
let space = new Component.Space();
let slider = new Component.Slider('radius');
let circle = new Component.Circle(100, Math.round(window.innerWidth / 2), Math.round(window.innerHeight / 2));
let colorExtractor = new Component.ColorExtractor(randomInteger);
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
    let xAxis = (Math.random() * (window.innerWidth - 20)) + 10;
    let yAxis = (Math.random() * (window.innerHeight - 20)) + 10;
    let color = colorExtractor.rgba();
    let radius = (Math.random() * 15) + 1;
    let point = new Component.Point(xAxis, yAxis, color, radius);
    space.append(point);
}
let visualizer = new Component.Visualizer(document);
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
    let xAxis = e.clientX;
    let yAxis = e.clientY;
    let color = colorExtractor.rgba();
    let radius = (Math.random() * 10) + 5;
    let point = new Component.Point(xAxis, yAxis, color, radius);
    space.append(point);
    visualizer.render(point);
};
window.onmousemove = (e) => {
    circle.xAxis = e.clientX;
    circle.yAxis = e.clientY;
};
//# sourceMappingURL=index.js.map