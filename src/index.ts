import Point from './components/Point.js';
import Space from './components/Space.js';
import Visualizer from "./components/Visualizer.js";
import getRandomColor from "./functions/getRandomColor.js";

let randomPointsCount = Math.round(Math.random() * 200);
let space = new Space();

for (let i = 0; i < randomPointsCount; i++) {
    let xAxisRandom = (Math.random() * (window.innerWidth - 20)) + 10;
    let yAxisRandom = (Math.random() * (window.innerHeight - 20)) + 10;

    space.append(new Point(xAxisRandom, yAxisRandom, getRandomColor()));
}

let visualizer = new Visualizer(document);
visualizer.render(space);

setInterval(() => {
    space.points.forEach((point: Point) => {
        let nextX = point.xAxis + (Math.random() * 4) - 2;
        let nextY = point.yAxis + (Math.random() * 4) - 2;
        if (nextX >= window.innerWidth - 10) {
            nextX -= 10;
        } else if (nextX <= 10) {
            nextX += 10;
        }
        if (nextY >= window.innerHeight - 10) {
            nextY -= 10;
        } else if (nextY <= 10) {
            nextY += 10;
        }

        point.xAxis = nextX;
        point.yAxis = nextY;
        point.update();
    });
}, 2);
