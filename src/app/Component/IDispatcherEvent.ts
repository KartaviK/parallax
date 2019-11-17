import {IListener} from "./IListener";

export default interface IDispatcherEvent {
    listeners: IListener[];
}
