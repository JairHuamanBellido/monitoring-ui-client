import { SocketPort } from "./SocketPort";

export interface SocketPayloadPort<T> extends SocketPort {
  payload: T;
}
