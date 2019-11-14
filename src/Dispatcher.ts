import IListener, {IListenerParams} from "./interfaces/IListener.js";
import IEvent from "./interfaces/IEvent.js";
import Point from "./components/Point.js";

export interface IEventList {
    [key: string]: IEvent,
}

export default class Dispatcher {
    private _events: IEventList = {};

    get events(): string[] {
        return Object.keys(this._events);
    }

    public addListener(event: string, callback: IListener): void {
        (this._events[event] || (this._events[event] = {listeners: []})).listeners.push(callback);
    }

    public dispatch(event: string, point: Point, params: IListenerParams): void {
        this._events[event].listeners.forEach((listener: IListener) => listener(point, params))
    }
}
