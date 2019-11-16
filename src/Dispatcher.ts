import {Listener, ListenerParams} from "./interfaces/Listener";
import DispatcherEvent from "./interfaces/DispatcherEvent";
import Point from "./components/Point";

export interface IEventList {
    [key: string]: DispatcherEvent,
}

export default class Dispatcher {
    private _events: IEventList = {};

    get events(): string[] {
        return Object.keys(this._events);
    }

    public removeListener(event: string): void {
        delete this._events[event];
    }

    public addListener(event: string, callback: Listener): void {
        (this._events[event] || (this._events[event] = {listeners: []})).listeners.push(callback);
    }

    public dispatch(event: string, point: Point, params: ListenerParams): void {
        this._events.hasOwnProperty(event) && this._events[event].listeners.forEach((listener: Listener) => {
            listener(point, params);
        });
    }
}
