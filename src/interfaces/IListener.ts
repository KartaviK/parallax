import Point from "../components/Point";

interface IListenerParams {
    [p: string]: (...args: any) => any;
}

type IListener<P extends Point, T extends IListenerParams> = (point: P, params: T) => void;

export {
    IListener,
    IListenerParams,
};
