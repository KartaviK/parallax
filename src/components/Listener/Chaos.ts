import {Listener, ListenerParams} from "../../interfaces/Listener";
import AbstractFigure from "../AbstractFigure";
import Point from "../Point";

export interface ChaosParams extends ListenerParams {
    figure: () => AbstractFigure;
    nextX: () => number;
    nextY: () => number;
}

export const Chaos: Listener<Point, ChaosParams> = (point: Point, params: ChaosParams): void => {
    const {nextX, nextY, figure: entity} = params;

    const x = nextX();
    const y = nextY();
    const figure = entity();

    if (figure.IsInside(point)) {
        point.YAxis += figure.IsUpper(point) ? y : -y;
        point.XAxis += figure.IsOnLeft(point) ? -x : x;
    } else {
        point.YAxis += figure.IsUnder(point) ? y : -y;
        point.XAxis += figure.IsOnRight(point) ? -x : x;
    }
    point.GravitationTime = 1;
};
