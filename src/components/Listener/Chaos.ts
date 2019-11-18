import {Listener, ListenerParams} from "../../interfaces/Listener";
import AbstractFigure from "../AbstractFigure";
import Point from "../Point";

export interface IChaosParams extends ListenerParams {
    nextX: () => number;
    nextY: () => number;
    figure: () => AbstractFigure;
}

export const Chaos: Listener<Point, IChaosParams> = (point: Point, params: IChaosParams): void => {
    let {nextX, nextY, figure: entity} = params;

    let x = nextX();
    let y = nextY();
    let figure = entity();

    if (figure.isInside(point)) {
        point.yAxis += figure.isUpper(point) ? y : -y;
        point.xAxis += figure.isOnLeft(point) ? -x : x;
    } else {
        point.yAxis += figure.isUnder(point) ? y : -y;
        point.xAxis += figure.isOnRight(point) ? -x : x;
    }
    point.gravitationTime = 1;
};
