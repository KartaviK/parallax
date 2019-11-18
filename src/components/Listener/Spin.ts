import {Listener, ListenerParams} from "../../interfaces/Listener";
import AbstractFigure from "../AbstractFigure";
import Point from "../Point";

export interface SpinParams extends ListenerParams {
    figure: () => AbstractFigure;
    nextX: () => number;
    nextY: () => number;
    spin: () => { clockwise: boolean, enable: boolean };
}

export const Spin: Listener<Point, SpinParams> = (point: Point, params: SpinParams): void => {
    const {spin, nextX, nextY, figure} = params;

    const x = nextX();
    const y = nextY();
    const target = figure();
    const spinData = spin();

    if (!spinData.enable) {
        return;
    }

    if (target.IsOnRight(point) && target.IsUnder(point)) {
        point.YAxis += spinData.clockwise ? y : -y;
    }
    if (target.IsOnRight(point) && target.IsUpper(point)) {
        point.XAxis -= spinData.clockwise ? x : -x;
    }
    if (target.IsOnLeft(point) && target.IsUpper(point)) {
        point.YAxis -= spinData.clockwise ? y : -y;
    }
    if (target.IsOnLeft(point) && target.IsUnder(point)) {
        point.XAxis += spinData.clockwise ? x : -x;
    }
};
