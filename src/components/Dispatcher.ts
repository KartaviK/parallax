import {Listener, ListenerParams} from "../interfaces/Listener";
import Event from "../interfaces/Event";
import Point from "./Point";

export interface IEventList {
    [key: string]: Event,
}

export default class Dispatcher {
    private _events: IEventList = {};

    get events(): string[] {
        return Object.keys(this._events);
    }

    public removeListener(event: string): void {
        delete this._events[event];
    }

    public addListener(event: string, callback: Listener<Point, ListenerParams>): void {
        if (!this._events.hasOwnProperty(event)) {
            this._events[event] = {listeners: []}
        }

        this._events[event].listeners.push(callback);
    }

    public dispatch(event: string, point: Point, params: ListenerParams): void {
        if (!this._events.hasOwnProperty(event)) {
            return;
        }

        this._events[event].listeners.forEach((listener: Listener<Point, ListenerParams>) => {
            listener(point, params);
        });
    }
}
