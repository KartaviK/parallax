import * as Component from './components';
import * as Helper from './functions';

let randomPointsCount = Math.round(Math.random() * 1000);
let space = new Component.Space();

console.log(1);

for (let i = 0; i < randomPointsCount; i++) {
    let xAxisRandom = Math.random() * 100;
    let yAxisRandom = Math.random() * 100;

    space.append(new Component.Point(xAxisRandom, yAxisRandom, Helper.getRandomColor()));
}

let visualizer = new Component.Visualizer(document);
visualizer.render(space);


// while (true) {
//     space.points.forEach((point: Component.Point) => {
//         let nextX = point.xAxis + 1;
//     })
// }
