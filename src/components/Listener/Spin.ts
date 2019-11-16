import {Listener, ListenerParams} from "../../interfaces/Listener";
import Figure from "../../types/Figure";
import Point from "../Point";
import spin from "../../functions/spin";

export interface ISpinParams extends ListenerParams {
    spin: () => {enable: boolean, clockwise: boolean};
    nextX: () => number;
    nextY: () => number;
    figure: () => Figure;
}

export const Spin: Listener = (point: Point, params: ISpinParams): void => {
    let {spin: spinData, nextX, nextY, figure} = params;

    spinData().enable && spin(nextX(), nextY(), point, figure(), spinData().clockwise);
};
