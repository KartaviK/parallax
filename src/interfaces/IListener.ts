import Point from "../components/Point";

export interface IListenerParams {
    [p: string]: () => any
}

type IListener = (point: Point, params: IListenerParams) => void;

export default IListener;
