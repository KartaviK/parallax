import {Listener} from "./Listener.js";

export default interface DispatcherEvent {
    listeners: Listener[];
}
