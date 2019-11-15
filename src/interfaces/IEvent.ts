import IListener from "./IListener.js";

export default interface IEvent {
    listeners: IListener[];
}
