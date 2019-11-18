import Point from "../components/Point";
import {Listener, ListenerParams} from "./Listener";

export default interface DispatcherEvent {
    listeners: Array<Listener<Point, ListenerParams>>;
}
