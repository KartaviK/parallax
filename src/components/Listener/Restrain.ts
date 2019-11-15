import IListener, {IListenerParams} from "../../interfaces/IListener.js";
import Point from "../Point.js";
import restrain from "../../functions/restrain.js";

export interface IRestrainParams extends IListenerParams {
    window: () => Window;
}

export const Restrain: IListener = (point: Point, params: IRestrainParams): void => {
    let {window: wn} = params;

    restrain(point, wn());
};
