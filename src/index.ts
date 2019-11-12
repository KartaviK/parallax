import Point from './components/Point.js';
import Space from './components/Space.js';
import Visualizer from "./components/Visualizer.js";
import getRandomColor from "./functions/getRandomColor.js";

let randomPointsCount = Math.round(Math.random() * 50);
let space = new Space();

for (let i = 0; i < randomPointsCount; i++) {
    let xAxisRandom = (Math.random() * (window.innerWidth - 20)) + 10;
    let yAxisRandom = (Math.random() * (window.innerHeight - 20)) + 10;

    space.append(new Point(xAxisRandom, yAxisRandom, getRandomColor(), (Math.random() * 10) + 5));
}

let visualizer = new Visualizer(document);
visualizer.render(space);

setInterval(() => {
    space.points.forEach((point: Point) => {
        let nextX = point.xAxis + (Math.random() * 20) - 10;
        let nextY = point.yAxis + (Math.random() * 20) - 10;
        if (nextX >= window.innerWidth - 20) {
            nextX -= 20;
        } else if (nextX <= 20) {
            nextX += 20;
        }
        if (nextY >= window.innerHeight - 20) {
            nextY -= 20;
        } else if (nextY <= 20) {
            nextY += 20;
        }

        point.xAxis = nextX;
        point.yAxis = nextY;
        point.update();
    });
}, 75);
