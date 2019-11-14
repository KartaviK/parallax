import IListener, {IListenerParams} from "../../interfaces/IListener.js";
import Point from "../Point.js";
import Figure from "../../types/Figure.js";
import chaos from "../../functions/chaos.js";

export interface IChaosParams extends IListenerParams {
    nextX: () => number;
    nextY: () => number;
    figure: () => Figure;
}

export const Chaos: IListener = (point: Point, params: IChaosParams): void => {
    let {nextX, nextY, figure} = params;

    chaos(nextX(), nextY(), point, figure());
};
