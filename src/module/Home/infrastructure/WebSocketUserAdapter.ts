import { BlockAccountNotificationPort } from "../domain/port/BlockAccountNotificationPort";
import { JoinRoomPort } from "../domain/port/JoinRoomPort";

export class WebSocketUserAdapter {
  public static joinClientRoom(port: JoinRoomPort): void {
    const { payload, room, socket } = port;
    socket.emit(room, payload);
  }

  public static handleBlockAccountNotification(port: BlockAccountNotificationPort): void {
    const { event, socket, listener } = port;
    socket.on(event, listener);
  }
}
