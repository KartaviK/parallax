export default class Dispatcher {
    constructor() {
        this._events = {};
    }
    get events() {
        return Object.keys(this._events);
    }
    removeListener(event) {
        delete this._events[event];
    }
    addListener(event, callback) {
        (this._events[event] || (this._events[event] = { listeners: [] })).listeners.push(callback);
    }
    dispatch(event, point, params) {
        this._events.hasOwnProperty(event) && this._events[event].listeners.forEach((listener) => {
            listener(point, params);
        });
    }
}
//# sourceMappingURL=Dispatcher.js.map