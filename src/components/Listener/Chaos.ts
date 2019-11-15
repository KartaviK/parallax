import {Listener, ListenerParams} from "../../interfaces/Listener.js";
import Point from "../Point.js";
import Figure from "../../types/Figure.js";
import chaos from "../../functions/chaos.js";

export interface IChaosParams extends ListenerParams {
    nextX: () => number;
    nextY: () => number;
    figure: () => Figure;
}

export const Chaos: Listener = (point: Point, params: IChaosParams): void => {
    let {nextX, nextY, figure} = params;

    chaos(nextX(), nextY(), point, figure());
};
