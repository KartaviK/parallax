import {IListener, IListenerParams} from "../../interfaces/IListener";
import Point from "../Point";

export interface IRestrainParams extends IListenerParams {
    window: () => Window;
}

export const Restrain: IListener<Point, IRestrainParams> = (point: Point, params: IRestrainParams): void => {
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
