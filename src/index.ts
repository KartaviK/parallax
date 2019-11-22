import * as Component from "./components";
import {ChaosParams, GravityParams, RestrainParams, SpinParams} from "./components/Listener";
import {ListenerParams} from "./interfaces/Listener";
import "./styles/main.css";
import "./styles/reset.min.css";
import Color from "color";
import randomInt from "random-int";

const randomPointsCount = randomInt(50);
const space = new Component.Space();
const slider = new Component.Slider("radius");
const circle = new Component.Circle(
    100,
    Math.round(window.innerWidth / 2),
    Math.round(window.innerHeight / 2),
);

const spin = {enable: false, clockwise: true};
const chaosParams: ChaosParams = {
    figure: () => circle,
    nextX: () => randomInt(75),
    nextY: () => randomInt(75),
};
const restrainParams: RestrainParams = {
    window: () => window,
};
const spinParams: SpinParams = {
    figure: () => circle,
    nextX: () => randomInt(75),
    nextY: () => randomInt(75),
    spin: () => spin,
};
const eventParams: { [event: string]: ListenerParams } = {
    chaos: chaosParams,
    restrain: restrainParams,
    spin: spinParams,
};
const dispatcher = new Component.Dispatcher();

dispatcher.AddListener("chaos", Component.Listener.Chaos);
dispatcher.AddListener("restrain", Component.Listener.Restrain);
dispatcher.AddListener("spin", Component.Listener.Spin);
dispatcher.AddListener("gravity", Component.Listener.Gravity);

slider.Target.oninput = (() => {
    circle.Radius = parseInt(slider.Value, 10);
});

document.getElementById("spin").onclick = () => {
    spin.enable = !spin.enable;
};

document.getElementById("reverse").onclick = () => {
    spin.clockwise = !spin.clockwise;
};

const chaoticButton = document.getElementById("chaotic");
chaoticButton.onclick = () => {
    const use = chaoticButton.dataset.use === "1";

    chaoticButton.innerText = use ? "chaotic" : "static";
    chaoticButton.dataset.use = use ? "0" : "1";

    if (use) {
        dispatcher.AddListener("chaos", Component.Listener.Chaos);
    } else {
        dispatcher.RemoveListener("chaos");
    }
};

for (let i = 0; i < randomPointsCount; i++) {
    const xAxis = randomInt(10, window.innerWidth - 20);
    const yAxis = randomInt(10, window.innerHeight - 20);
    const color = Color.rgb([randomInt(255), randomInt(255), randomInt(255)]).string();
    const radius = randomInt(1, 15);
    const point = new Component.Point(xAxis, yAxis, color, radius);

    space.Append(point);
}

const visualizer = new Component.Visualizer(document);
visualizer.Render(space);

const updateHandler = () => {
    space.Points.forEach((point: Component.Point) => {
        eventParams.gravity = <GravityParams>{
            iteration: () => 1,
            targetXAxis: () => point.XAxis,
            targetYAxis: (p: Component.Point) => window.innerHeight - p.Radius * 2,
            time: () => point.GravitationTime,
        };

        for (const event in eventParams) {
            if (eventParams.hasOwnProperty(event)) {
                dispatcher.Dispatch(event, point, eventParams[event]);
            }
        }

        point.Update();
    });
};

setInterval(updateHandler, 120);

visualizer.Root.onwheel = (e: WheelEvent) => {
    const value = Math.ceil(parseInt(slider.Target.value, 10) + e.deltaY);

    if (parseInt(slider.Target.max, 10) > value && parseInt(slider.Target.min, 10) < value) {
        slider.Target.value = `${value}`;
        circle.Radius = value;
    }
};
visualizer.Root.onclick = (e: MouseEvent) => {
    const xAxis = e.clientX;
    const yAxis = e.clientY;
    const color = Color.rgb([randomInt(255), randomInt(255), randomInt(255)]).string();
    const radius = randomInt(5, 10);
    const point = new Component.Point(xAxis, yAxis, color, radius);

    space.Append(point);
    visualizer.Render(point);
};

window.onmousemove = (e: MouseEvent) => {
    circle.XAxis = e.clientX;
    circle.YAxis = e.clientY;
};
