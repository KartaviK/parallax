import {IListener, IListenerParams} from "./IListener";
import IDispatcherEvent from "./IDispatcherEvent";
import Point from "./Point";

export interface IEventList {
    [key: string]: IDispatcherEvent,
}

export default class Dispatcher {
    private _events: IEventList = {};

    get events(): string[] {
        return Object.keys(this._events);
    }

    public removeListener(event: string): void {
        delete this._events[event];
    }

    public addListener(event: string, callback: IListener): void {
        (this._events[event] || (this._events[event] = {listeners: []})).listeners.push(callback);
    }

    public dispatch(event: string, point: Point, params: IListenerParams): void {
        this._events.hasOwnProperty(event) && this._events[event].listeners.forEach((listener: IListener) => {
            listener(point, params);
        });
    }
}
