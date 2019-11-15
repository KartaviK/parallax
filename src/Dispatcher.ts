import {Listener, ListenerParams} from "./interfaces/Listener.js";
import DispatcherEvent from "./interfaces/DispatcherEvent.js";
import Point from "./components/Point.js";

export interface IEventList {
    [key: string]: DispatcherEvent,
}

export default class Dispatcher {
    private _events: IEventList = {};

    get events(): string[] {
        return Object.keys(this._events);
    }

    public addListener(event: string, callback: Listener): void {
        (this._events[event] || (this._events[event] = {listeners: []})).listeners.push(callback);
    }

    public dispatch(event: string, point: Point, params: ListenerParams): void {
        this._events[event].listeners.forEach((listener: Listener) => listener(point, params))
    }
}
