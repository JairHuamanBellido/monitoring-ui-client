import { LocalStorageAdapter } from "core/adapter/LocalStorageAdapter";
import { WebSocketUserAdapter } from "module/Home/infrastructure/WebSocketUserAdapter";
import { Socket } from "socket.io-client";
import { SocketPayloadPort } from "../port/SocketPayloadPort";

export class SubscribeAdminRequestConnectionStatusUseCase {
  public static subscribe(socket: Socket) {
    const port: SocketPayloadPort<string> = {
      socket: socket,
      payload: LocalStorageAdapter.getId(),
    };

    WebSocketUserAdapter.subscribeAdminRequestConnectionStatus(port);
  }

  public static unsubscribe(socket: Socket): void {
    WebSocketUserAdapter.unsubscribeAdminRequestConnectionStatus(socket);
  }
}
