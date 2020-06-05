import EventEmitter from "eventemitter3";

export const EVENTS = {
    START: 'START'
}

const Observer = new EventEmitter();
export default Observer;
