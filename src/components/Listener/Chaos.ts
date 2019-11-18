import {IListener, IListenerParams} from "../../interfaces/IListener";
import AbstractFigure from "../AbstractFigure";
import Point from "../Point";

export interface IChaosParams extends IListenerParams {
    nextX: () => number;
    nextY: () => number;
    figure: () => AbstractFigure;
}

export const Chaos: IListener<Point, IChaosParams> = (point: Point, params: IChaosParams): void => {
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
