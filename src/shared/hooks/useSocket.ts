import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

export default function useSocket(roomspace: string) {
  const [socket, setSocket] = useState<Socket>();
  useEffect(() => {
    setSocket(
      io(`http://localhost:3001/${roomspace}`, {
        transports: ["websocket", "polling"],
      })
    );
  }, [roomspace]);

  return socket as Socket;
}
