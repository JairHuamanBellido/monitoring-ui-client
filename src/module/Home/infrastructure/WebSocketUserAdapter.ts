import { Socket } from "socket.io-client";
import { SocketPayloadPort } from "../domain/port/SocketPayloadPort";
import { SocketSubscribePort } from "../domain/port/SocketSubscribePort";

export class WebSocketUserAdapter {
  public static joinClientRoom(port: SocketPayloadPort<number>): void {
    const { payload, socket } = port;
    socket.emit("clientJoinRoom", payload);
  }

  public static subscribeBlockAccountNotification(
    port: SocketSubscribePort<undefined>
  ): void {
    const { socket, fn } = port;
    socket.on("blockAccount", () => {
      fn();
    });
  }

  public static emitLogout(port: SocketPayloadPort<string>): void {
    const { payload, socket } = port;
    socket.emit("logoutClient", payload);
  }

  public static subscribeAdminRequestConnectionStatus(
    port: SocketPayloadPort<string>
  ): void {
    const { socket, payload } = port;
    socket.on("reportStatusConnection", () => {
      socket.emit("handleUserConnection", payload);
    });
  }

  public static unsubscribeBlockAccountNotification(socket: Socket): void {
    socket.off("blockAccount");
  }

  public static unsubscribeAdminRequestConnectionStatus(socket: Socket): void {
    socket.off("reportStatusConnection");
  }
}
