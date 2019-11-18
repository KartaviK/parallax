import {Listener, ListenerParams} from "../../interfaces/Listener";
import Point from "../Point";

export interface RestrainParams extends ListenerParams {
    window: () => Window;
}

export const Restrain: Listener<Point, RestrainParams> = (point: Point, params: RestrainParams): void => {
    let {window: wn} = params;
    let target = wn();

    if (point.xAxis > target.innerWidth - point.radius * 2) {
        point.xAxis = target.innerWidth - point.radius * 2;
    } else if (point.xAxis <= point.radius * 2) {
        point.xAxis = point.radius * 2;
    }
    if (point.yAxis > target.innerHeight - point.radius * 2) {
        point.yAxis = target.innerHeight - point.radius * 2;
    } else if (point.yAxis <= point.radius * 2) {
        point.yAxis = point.radius * 2;
    }
};
