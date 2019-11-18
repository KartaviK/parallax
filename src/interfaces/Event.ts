import {Listener, ListenerParams} from "./Listener";
import Point from "../components/Point";

export default interface Event {
    listeners: Listener<Point, ListenerParams>[];
}
