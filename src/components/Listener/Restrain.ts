import {Listener, ListenerParams} from "../../interfaces/Listener";
import Point from "../Point";

export interface RestrainParams extends ListenerParams {
    window: () => Window;
}

export const Restrain: Listener<Point, RestrainParams> = (point: Point, params: RestrainParams): void => {
    const {window: wn} = params;
    const target = wn();

    if (point.XAxis > target.innerWidth - point.Radius * 2) {
        point.XAxis = target.innerWidth - point.Radius * 2;
    } else if (point.XAxis <= point.Radius * 2) {
        point.XAxis = point.Radius * 2;
    }
    if (point.YAxis > target.innerHeight - point.Radius * 2) {
        point.YAxis = target.innerHeight - point.Radius * 2;
    } else if (point.YAxis <= point.Radius * 2) {
        point.YAxis = point.Radius * 2;
    }
};
