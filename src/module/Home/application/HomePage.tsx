import { useEffect, useState } from "react";
import { Flex, useSocket } from "shared";
import useGuestUser from "./hooks/useGuestUser";
import "./index.scss";
import { SubscribeAdminRequestConnectionStatusUseCase } from "../domain/usecase/SubscribeAdminRequestConnectionStatusUseCase";
import { SubscribeBlockAccountNotificationUseCase } from "../domain/usecase/SubscribeBlockAccountNotificationUseCase";
import { EmitJoinRoomUseCase } from "../domain/usecase/EmitJoinRoomUseCase";
import { EmitLogoutUseCase } from "../domain/usecase/EmitLogoutUseCase";
import { Link } from "react-router-dom";

export default function HomePage() {
  const { data, isLoading, isError } = useGuestUser();
  const [isBlocked, setIsBlocked] = useState<boolean>(false);
  const socket = useSocket("users-management");
  useEffect(() => {
    if (socket !== undefined) {
      EmitJoinRoomUseCase.execute(socket);
      SubscribeBlockAccountNotificationUseCase.subscribe(socket, blockAccount);
      SubscribeAdminRequestConnectionStatusUseCase.subscribe(socket);

      return () => {
        EmitLogoutUseCase.emit(socket);
        SubscribeAdminRequestConnectionStatusUseCase.unsubscribe(socket);
        SubscribeBlockAccountNotificationUseCase.unsubscribe(socket);
      };
    }
  }, [socket]);

  const blockAccount = (): void => {
    setIsBlocked(true);
  };

  const { avatar, name } = data || {};
  if (isLoading) return <p>Cargando...</p>;
  if (isError) return <p>Something go wrong</p>;
  return (
    <Flex
      width="100%"
      height="100vh"
      direction="column"
      justifyContent="center"
      alignItems="center"
      className="home-container"
    >
      <img src={avatar} alt={name} />
      <h1>Bienvenido {name}</h1>
      {isBlocked && <p>bloquedo</p>}
      <p>Actualmente estas conectado a la plataforma</p>
      <Link to="/login">Cerrar sesion</Link>
    </Flex>
  );
}
