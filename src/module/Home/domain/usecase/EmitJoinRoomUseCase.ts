import { LocalStorageAdapter } from "core/adapter/LocalStorageAdapter";
import { WebSocketUserAdapter } from "module/Home/infrastructure/WebSocketUserAdapter";
import { Socket } from "socket.io-client";
import { SocketPayloadPort } from "../port/SocketPayloadPort";

export class EmitJoinRoomUseCase {
  public static execute(socket: Socket): void {
    const port: SocketPayloadPort<number> = {
      payload: parseInt(LocalStorageAdapter.getId()),
      socket: socket,
    };
    WebSocketUserAdapter.joinClientRoom(port);
  }
}
