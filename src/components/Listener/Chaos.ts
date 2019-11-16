import {Listener, ListenerParams} from "../../interfaces/Listener";
import Point from "../Point";
import Figure from "../../types/Figure";
import chaos from "../../functions/chaos";

export interface IChaosParams extends ListenerParams {
    nextX: () => number;
    nextY: () => number;
    figure: () => Figure;
}

export const Chaos: Listener = (point: Point, params: IChaosParams): void => {
    let {nextX, nextY, figure} = params;

    chaos(nextX(), nextY(), point, figure());
};
