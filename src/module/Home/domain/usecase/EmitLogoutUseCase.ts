import { LocalStorageAdapter } from "core/adapter/LocalStorageAdapter";
import { WebSocketUserAdapter } from "module/Home/infrastructure/WebSocketUserAdapter";
import { Socket } from "socket.io-client";
import { SocketPayloadPort } from "../port/SocketPayloadPort";

export class EmitLogoutUseCase {
  public static emit(socket: Socket): void {
    const port: SocketPayloadPort<string> = {
      payload: LocalStorageAdapter.getId(),
      socket: socket,
    };

    WebSocketUserAdapter.emitLogout(port);
  }
}
