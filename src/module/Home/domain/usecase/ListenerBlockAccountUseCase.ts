import { WebSocketUserAdapter } from "module/Home/infrastructure/WebSocketUserAdapter";
import { Socket } from "socket.io-client";
import { BlockAccountNotificationPort } from "../port/BlockAccountNotificationPort";

export class ListenerBlockAccountUseCase {
  public static listen(socket: Socket, fn: () => void) {
    const port: BlockAccountNotificationPort = {
      event: "block account",
      listener: fn,
      socket: socket,
    };

    WebSocketUserAdapter.handleBlockAccountNotification(port);
  }
}
