import Point from "../components/Point";

interface ListenerParams {
    [p: string]: () => any
}

type Listener = (point: Point, params: ListenerParams) => void;

export {
    Listener,
    ListenerParams
}
