import DispatcherEvent from "../interfaces/DispatcherEvent";
import {Listener, ListenerParams} from "../interfaces/Listener";
import Point from "./Point";

export interface EventList {
    [key: string]: DispatcherEvent;
}

export default class Dispatcher {
    get EventsList(): string[] {
        return Object.keys(this.Events);
    }

    private Events: EventList = {};

    public AddListener(event: string, callback: Listener<Point, ListenerParams>): void {
        if (!this.Events.hasOwnProperty(event)) {
            this.Events[event] = {listeners: []};
        }

        this.Events[event].listeners.push(callback);
    }

    public Dispatch(event: string, point: Point, params: ListenerParams): void {
        if (!this.Events.hasOwnProperty(event)) {
            return;
        }

        this.Events[event].listeners.forEach((listener: Listener<Point, ListenerParams>) => {
            listener(point, params);
        });
    }

    public RemoveListener(event: string): void {
        delete this.Events[event];
    }
}
