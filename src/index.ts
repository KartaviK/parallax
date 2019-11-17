import Random from "./app/Helper/Random";
import * as Component from './app/Component';
import ColorExtractor from "./app/Helper/ColorExtractor";
import gravity from "./app/Action/gravity";

import './Style/main.css';
import './Style/reset.min.css';
import {IChaosParams} from "./app/Component/Listener";

let randomPointsCount = Math.round(Math.random() * 50);
let space = new Component.Space();
let slider = new Component.Slider('radius');
let circle = new Component.Circle(
    100,
    Math.round(window.innerWidth / 2),
    Math.round(window.innerHeight / 2)
);
let colorExtractor = new ColorExtractor(Random.number);
let spin = {enable: false, clockwise: true};
let chaosParams: IChaosParams = {
    nextX: () => Math.random() * 75,
    nextY: () => Math.random() * 75,
    figure: () => circle
};
let restrainParams: Component.Listener.IRestrainParams = {
    window: () => window,
};
let spinParams: Component.Listener.ISpinParams = {
    spin: () => spin,
    nextX: () => Math.random() * 75,
    nextY: () => Math.random() * 75,
    figure: () => circle,
};
let eventParams: { [event: string]: Component.IListenerParams} = {
    chaos: chaosParams,
    restrain: restrainParams,
    spin: spinParams,
};
let dispatcher = new Component.Dispatcher();

dispatcher.addListener('chaos', Component.Listener.Chaos);
dispatcher.addListener('restrain', Component.Listener.Restrain);
dispatcher.addListener('spin', Component.Listener.Spin);

slider.target.oninput = (() => {
    circle.radius = parseInt(slider.value);
});

document.getElementById('spin').onclick = () => {
    spin.enable = !spin.enable;
};

document.getElementById('reverse').onclick = () => {
    spin.clockwise = !spin.clockwise;
};

let chaoticButton = document.getElementById('chaotic');
chaoticButton.onclick = () => {
    let use = chaoticButton.dataset['use'] === '1';

    chaoticButton.innerText = use ? 'chaotic' : 'static';
    chaoticButton.dataset['use'] = use ? '0' : '1';

    if (use) {
        dispatcher.addListener('chaos', Component.Listener.Chaos);
    } else {
        dispatcher.removeListener('chaos');
    }
};

for (let i = 0; i < randomPointsCount; i++) {
    let xAxis = (Math.random() * (window.innerWidth - 20)) + 10;
    let yAxis = (Math.random() * (window.innerHeight - 20)) + 10;
    let color = colorExtractor.rgba();
    let radius = Math.round((Math.random() * 15) + 1);
    let point = new Component.Point(xAxis, yAxis, color, radius);

    space.append(point);
}

let visualizer = new Component.Visualizer(document);
visualizer.render(space);

let updateHandler = () => {
    space.points.forEach(point => {
        gravity(point, point.xAxis, window.innerHeight - point.radius, point.gravitationTime++);
        Object.keys(eventParams).forEach(event => dispatcher.dispatch(event, point, eventParams[event]));

        point.update();
    });
};

setInterval(updateHandler, 120);

visualizer.root.onwheel = (e: WheelEvent) => {
    let value = Math.ceil(parseInt(slider.target.value) + e.deltaY);

    if (parseInt(slider.target.max) > value && parseInt(slider.target.min) < value) {
        slider.target.value = `${value}`;
        circle.radius = value;
    }
};
visualizer.root.onclick = (e: MouseEvent) => {
    let xAxis = e.clientX;
    let yAxis = e.clientY;
    let color = colorExtractor.rgba();
    let radius = (Math.random() * 10) + 5;
    let point = new Component.Point(xAxis, yAxis, color, radius);

    space.append(point);
    visualizer.render(point);
};

window.onmousemove = (e: MouseEvent) => {
    circle.xAxis = e.clientX;
    circle.yAxis = e.clientY;
};
