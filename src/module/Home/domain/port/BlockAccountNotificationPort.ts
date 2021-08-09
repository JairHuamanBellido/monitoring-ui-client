import { Socket } from "socket.io-client";

export interface BlockAccountNotificationPort{
    socket:Socket,
    event:string;
    listener():void
}