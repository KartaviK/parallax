import {Listener} from "./Listener";

export default interface DispatcherEvent {
    listeners: Listener[];
}
