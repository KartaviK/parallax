import IEvent from "../interfaces/IEvent";
import {IListener, IListenerParams} from "../interfaces/IListener";
import Point from "./Point";

export interface IEventList {
    [key: string]: IEvent;
}

export default class Dispatcher {
    private Events: IEventList = {};

    get EventsList(): string[] {
        return Object.keys(this.Events);
    }

    public RemoveListener(event: string): void {
        delete this.Events[event];
    }

    public AddListener(event: string, callback: IListener<Point, IListenerParams>): void {
        if (!this.Events.hasOwnProperty(event)) {
            this.Events[event] = {listeners: []};
        }

        this.Events[event].listeners.push(callback);
    }

    public Dispatch(event: string, point: Point, params: IListenerParams): void {
        if (!this.Events.hasOwnProperty(event)) {
            return;
        }

        this.Events[event].listeners.forEach((listener: IListener<Point, IListenerParams>) => {
            listener(point, params);
        });
    }
}
