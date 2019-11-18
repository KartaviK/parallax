import {IListener, IListenerParams} from "../../interfaces/IListener";
import AbstractFigure from "../AbstractFigure";
import Point from "../Point";

export interface ISpinParams extends IListenerParams {
    spin: () => { enable: boolean, clockwise: boolean };
    nextX: () => number;
    nextY: () => number;
    figure: () => AbstractFigure;
}

export const Spin: IListener<Point, ISpinParams> = (point: Point, params: ISpinParams): void => {
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
