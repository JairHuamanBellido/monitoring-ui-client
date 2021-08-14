import { WebSocketUserAdapter } from "module/Home/infrastructure/WebSocketUserAdapter";
import { Socket } from "socket.io-client";
import { SocketSubscribePort } from "../port/SocketSubscribePort";

export class SubscribeBlockAccountNotificationUseCase {
  public static subscribe(socket: Socket, fn: () => void) {
    const port: SocketSubscribePort<undefined> = {
      fn: fn,
      socket: socket,
    };

    WebSocketUserAdapter.subscribeBlockAccountNotification(port);
  }

  public static unsubscribe(socket: Socket): void {
    WebSocketUserAdapter.unsubscribeBlockAccountNotification(socket);
  }
}
