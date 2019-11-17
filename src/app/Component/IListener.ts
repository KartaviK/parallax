import Point from "./Point";

interface IListenerParams {
    [p: string]: () => any
}

type IListener = (point: Point, params: IListenerParams) => void;

export {
    IListener,
    IListenerParams
}
