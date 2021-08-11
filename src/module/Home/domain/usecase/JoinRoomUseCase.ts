import { LocalStorageAdapter } from "core/adapter/LocalStorageAdapter";
import { WebSocketUserAdapter } from "module/Home/infrastructure/WebSocketUserAdapter";
import { Socket } from "socket.io-client";
import { JoinRoomPort } from "../port/JoinRoomPort";

export class JoinRoomUseCase {
  public static join(socket: Socket): void {
    const port: JoinRoomPort = {
      payload:  parseInt(LocalStorageAdapter.getId()),
      room:     "clientJoinRoom",
      socket:   socket,
    };
    WebSocketUserAdapter.joinClientRoom(port);
  }
}
