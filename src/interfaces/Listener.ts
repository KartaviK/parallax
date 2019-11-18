import Point from "../components/Point";

interface ListenerParams {
    [p: string]: (...args: any) => any
}

interface Listener<P extends Point, T extends ListenerParams> {
    (point: P, params: T): void;
}

export {
    Listener,
    ListenerParams
}
