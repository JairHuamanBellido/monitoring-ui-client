import { useEffect, useState } from "react";
import { Flex, useSocket } from "shared";
import { ListenerBlockAccountUseCase } from "../domain/usecase/ListenerBlockAccountUseCase";
import { JoinRoomUseCase } from "../domain/usecase/JoinRoomUseCase";
import useGuestUser from "./hooks/useGuestUser";
import "./index.scss";

export default function HomePage() {
  const { data, isLoading, isError } = useGuestUser();
  const [isBlocked, setIsBlocked] = useState<boolean>(false);
  const socket = useSocket("users-management");
  useEffect(() => {
    if (socket !== undefined) {
      JoinRoomUseCase.join(socket);
      ListenerBlockAccountUseCase.listen(socket, blockAccount);
    }
  }, [socket]);

  const blockAccount = (): void => {
    setIsBlocked(true);
  };

  const { avatar, name } = data || {};
  if (isLoading) return <p>Cargando...</p>;
  if (isError) return <p>Something go wrong</p>;
  if (data === undefined) <p>undefined</p>
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
    </Flex>
  );
}
