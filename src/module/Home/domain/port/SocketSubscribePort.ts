import { SocketPort } from "./SocketPort";

export interface SocketSubscribePort<T> extends SocketPort {
  fn(params?: T): void;
}
