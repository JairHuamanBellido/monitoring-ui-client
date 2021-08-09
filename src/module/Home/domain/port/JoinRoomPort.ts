import { Socket } from "socket.io-client";

export interface JoinRoomPort {
  socket: Socket;
  room: string;
  payload: number;
}
