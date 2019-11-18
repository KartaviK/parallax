import Point from "../components/Point";
import {IListener, IListenerParams} from "./IListener";

export default interface IEvent {
    listeners: Array<IListener<Point, IListenerParams>>;
}
