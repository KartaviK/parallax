import Point from "../components/Point";

interface ListenerParams {
    [p: string]: (...args: any) => any;
}

type Listener<P extends Point, T extends ListenerParams> = (point: P, params: T) => void;

export {
    Listener,
    ListenerParams,
};
