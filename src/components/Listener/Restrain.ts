import {Listener, ListenerParams} from "../../interfaces/Listener.js";
import Point from "../Point.js";
import restrain from "../../functions/restrain.js";

export interface IRestrainParams extends ListenerParams {
    window: () => Window;
}

export const Restrain: Listener = (point: Point, params: IRestrainParams): void => {
    let {window: wn} = params;

    restrain(point, wn());
};
