import Point from './components/Point.js';
import Space from './components/Space.js';
import Visualizer from "./components/Visualizer.js";
import getRandomColor from "./functions/getRandomColor.js";
import Chaos from "./functions/Chaos.js";
let randomPointsCount = Math.round(Math.random() * 50);
let space = new Space();
for (let i = 0; i < randomPointsCount; i++) {
    let xAxisRandom = (Math.random() * (window.innerWidth - 20)) + 10;
    let yAxisRandom = (Math.random() * (window.innerHeight - 20)) + 10;
    space.append(new Point(xAxisRandom, yAxisRandom, getRandomColor(), (Math.random() * 10) + 5));
}
let visualizer = new Visualizer(document);
visualizer.render(space);
let chaosHandler = () => {
    space.points.forEach(point => {
        Chaos(point);
        point.update();
    });
};
let interval = setInterval(chaosHandler, 75);
window.onclick = (e) => {
    space.append(new Point(e.clientX, e.clientY, getRandomColor(), (Math.random() * 10) + 5));
    visualizer.clear();
    visualizer.render(space);
    clearInterval(interval);
    interval = setInterval(chaosHandler, 75);
};
//# sourceMappingURL=index.js.map