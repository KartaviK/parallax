import {Listener, ListenerParams} from "../../interfaces/Listener";
import Point from "../Point";
import restrain from "../../functions/restrain";

export interface IRestrainParams extends ListenerParams {
    window: () => Window;
}

export const Restrain: Listener = (point: Point, params: IRestrainParams): void => {
    let {window: wn} = params;

    restrain(point, wn());
};
