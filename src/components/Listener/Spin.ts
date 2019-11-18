import {Listener, ListenerParams} from "../../interfaces/Listener";
import AbstractFigure from "../AbstractFigure";
import Point from "../Point";

export interface SpinParams extends ListenerParams {
    spin: () => {enable: boolean, clockwise: boolean};
    nextX: () => number;
    nextY: () => number;
    figure: () => AbstractFigure;
}

export const Spin: Listener<Point, SpinParams> = (point: Point, params: SpinParams): void => {
    let {spin, nextX, nextY, figure} = params;

    let x = nextX();
    let y = nextY();
    let target = figure();
    let spinData = spin();

    if (!spinData.enable) {
        return;
    }

    if (target.isOnRight(point) && target.isUnder(point)) {
        point.yAxis += spinData.clockwise ? y : -y;
    }
    if (target.isOnRight(point) && target.isUpper(point)) {
        point.xAxis -= spinData.clockwise ? x : -x;
    }
    if (target.isOnLeft(point) && target.isUpper(point)) {
        point.yAxis -= spinData.clockwise ? y : -y;
    }
    if (target.isOnLeft(point) && target.isUnder(point)) {
        point.xAxis += spinData.clockwise ? x : -x;
    }
};
